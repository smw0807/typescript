import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserCreatetDto } from './dto/user.dto';
import { UserModel } from './models/user.model';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // 모든 사용자 조회
  async findManyUserAll(): Promise<UserModel[]> {
    return this.prisma.user.findMany();
  }

  // 사용자 등록
  async createUser(dto: UserCreatetDto): Promise<UserModel> {
    return this.prisma.user.create({
      data: dto,
    });
  }
}
