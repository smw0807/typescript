import { ForbiddenException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmailService } from 'src/email/email.service';
import * as uuid from 'uuid';
import { UserEntity } from './entity/user.entity';
import { DataSource, Repository } from 'typeorm';
import { ulid } from 'ulid';
import { AuthService } from 'src/auth/auth.service';
import { UserInfo } from './models/UserInfo';
@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(
    //@InjectRepository 데커레이터로 유저 저장소 주입
    @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>,
    private dataSource: DataSource,
    private emailService: EmailService,
    private authService: AuthService,
  ) {}

  // 사용자 등록
  async createUser(name: string, email: string, password: string) {
    await this.checkUserExists(email);

    const signupVerifyToken = uuid.v1();

    await this.saveUser(name, email, password, signupVerifyToken);
    await this.sendMemberJoinEmail(email, signupVerifyToken);
  }

  // 사용자 이메일 인증
  async verifyEmail(signupVerifyToken: string): Promise<string> {
    const user = await this.usersRepository.findOne({ where: { signupVerifyToken } });
    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다.');
    }
    try {
      const result = await this.usersRepository.update(user.id, { status: 'active' });
      if (result.affected !== 0) {
        this.logger.debug(`${this.verifyEmail.name} : VerifyEmail Success`);
        return this.authService.login({ id: user.id, name: user.name, email: user.email });
      } else {
        throw new Error('업데이트가 실패했습니다.');
      }
    } catch (error) {
      throw new Error('업데이트가 실패했습니다.');
    }
  }

  // 사용자 로그인
  async login(email: string, password: string): Promise<string> {
    const user = await this.usersRepository.findOne({ where: { email, password } });
    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다.');
    }
    if (user.status !== 'active') {
      throw new ForbiddenException('유저가 활성화 되지 않았습니다.');
    }
    return this.authService.login({ id: user.id, name: user.name, email: user.email });
  }

  // 사용자 정보 조회
  async getUserInfo(userId: string): Promise<UserInfo> {
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다.');
    }
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  // 사용자가 존재하는지 확인
  private checkUserExists(email: string) {
    this.logger.debug(this.checkUserExists.name, email);
    return false; //TODO: DB 연동 후 구현
  }

  /**
   * 사용자 등록
   * @param name 이름
   * @param email 이메일
   * @param password 페스워드
   * @param signupVerifyToken 토큰
   * @returns
   */
  private async saveUser(
    name: string,
    email: string,
    password: string,
    signupVerifyToken: string,
  ): Promise<UserEntity> {
    let result = null;
    try {
      // transaction 메서드는 EntityManager를 콜백으로 받아 사용자가 수행할 함수를 작성할 수 있다.
      await this.dataSource.transaction(async (manager) => {
        const user = new UserEntity();
        //랜덤 스트링 생성
        user.id = ulid(); //유저 아이디
        user.name = name; //이름
        user.email = email; //이메일
        user.password = password; //비밀번호
        user.signupVerifyToken = signupVerifyToken; //회원가입 인증 토큰
        user.status = 'inactive'; //회원가입 상태

        result = manager.save(user);
        this.logger.debug(this.saveUser.name, JSON.stringify(result));
      });
    } catch (e) {
      this.logger.error(this.saveUser.name, e);
    }
    return result;
  }

  // 회원가입 이메일 전송
  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
  }
  remove(id: number) {
    return `This action remove a #${id} user`;
  }
}
