import {
  Body,
  Controller,
  Post,
  Logger,
  Query,
  Get,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserInfo } from './entity/UserInfo';

@Controller('users')
export class UsersController {
  private readonly log = new Logger(UsersController.name);

  @Post() //{{api}}/users
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
    this.log.debug(dto);
  }

  @Post('/email-verify') //{{api}}/users/email-verify?signupVerifyToken=dudhfusdhfusdh
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    this.log.debug(this.verifyEmail.name, dto);
    return;
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    this.log.debug(this.login.name, dto);
    return;
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    this.log.debug(this.getUserInfo.name, userId);
    return;
  }
}
