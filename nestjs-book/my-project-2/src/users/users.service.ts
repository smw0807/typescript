import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmailService } from 'src/email/email.service';
import * as uuid from 'uuid';
import { UserEntity } from './entity/user.entity';
import { DataSource, Repository } from 'typeorm';
import { ulid } from 'ulid';
@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(
    //@InjectRepository 데커레이터로 유저 저장소 주입
    @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>,
    private dataSource: DataSource,
    private emailService: EmailService,
  ) {}

  async createUser(name: string, email: string, password: string) {
    await this.checkUserExists(email);

    const signupVerifyToken = uuid.v1();

    await this.saveUser(name, email, password, signupVerifyToken);
    // await this.sendMemberJoinEmail(email, signupVerifyToken);
  }

  async verifyEmail(signupVerifyToken: string): Promise<string> {
    // TODO
    // 1. DB에서 signupVerifyToken으로 회원 가입 처리중인 유저가 있는지 조회하고 없다면 에러 처리
    // 2. 바로 로그인 상태가 되도록 JWT를 발급
    this.logger.debug(signupVerifyToken);
    throw new Error('Method not implemented.');
  }

  async login(email: string, password: string): Promise<string> {
    // TODO
    // 1. email, password를 가진 유저가 존재하는지 DB에서 확인하고 없다면 에러 처리
    // 2. JWT 발급

    throw new Error('Method not implemented.');
  }

  // async getUserInfo(userId: string): Promise<UserInfo> {
  // TODO
  // 1. userId를 가진 유저가 존재하는지 DB에서 확인하고 없다면 에러 처리
  // 2. 조회된 데이터를 UserInfo 타입으로 응답
  // throw new Error('Method not implemented.');
  // }

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
    // 주입받은 DataSource 객체에서 QueryRunner를 생성
    const queryRunner = this.dataSource.createQueryRunner();
    // QueryRunner에서 DB에 연결
    await queryRunner.connect();
    // 트랜잭션 시작
    await queryRunner.startTransaction();
    let result = null;
    try {
      const user = new UserEntity();
      //랜덤 스트링 생성
      user.id = ulid();
      user.name = name;
      user.email = email;
      user.password = password;
      user.signupVerifyToken = signupVerifyToken;
      // const result = await this.usersRepository.save(user);
      result = queryRunner.manager.save(user);
      this.logger.debug(this.saveUser.name, JSON.stringify(result));
      // throw new InternalServerErrorException(null, 'Test Error');

      // DB 작업으 수행한 후 커밋을 해서 영속화를 완료한다.
      await queryRunner.commitTransaction();
    } catch (e) {
      this.logger.error(this.saveUser.name, e);
      // 롤백
      await queryRunner.rollbackTransaction();
    } finally {
      // 생성된 QueryRunner 객체 해제
      await queryRunner.release();
    }
    return result;
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
  }
  remove(id: number) {
    return `This action remove a #${id} user`;
  }
}
