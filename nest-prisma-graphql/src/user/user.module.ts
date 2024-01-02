import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  providers: [UserService, UserResolver, PrismaService],
  exports: [],
})
export class UserModule {}
