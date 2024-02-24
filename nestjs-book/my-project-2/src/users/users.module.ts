import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { EmailService } from 'src/email/email.service';

@Module({
  imports: [],
  providers: [UsersService, EmailService],
  controllers: [UsersController],
})
export class UsersModule {}
