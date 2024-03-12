import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { EmailModule } from 'src/email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  //forFeature메서드로 묘듈 내에 사용할 저장소 등록
  imports: [TypeOrmModule.forFeature([UserEntity]), EmailModule, AuthModule, CqrsModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
