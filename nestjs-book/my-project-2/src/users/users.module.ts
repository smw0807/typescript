import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { EmailModule } from 'src/email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';

@Module({
  //forFeature메서드로 묘듈 내에 사용할 저장소 등록
  imports: [TypeOrmModule.forFeature([UserEntity]), EmailModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
