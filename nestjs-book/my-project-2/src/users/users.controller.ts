import { Body, Controller, Post, Logger, Query, Get, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserInfo } from './entity/UserInfo';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  private readonly log = new Logger(UsersController.name);
  constructor(private usersService: UsersService) {}

  @Post() //{{api}}/users
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    this.log.debug(dto);
    const { name, email, password } = dto;
    await this.usersService.createUser(name, email, password);
  }

  @Post('/email-verify') //{{api}}/users/email-verify?signupVerifyToken=dudhfusdhfusdh
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    this.log.debug(this.verifyEmail.name, dto);
    const { signupVerifyToken } = dto;
    return await this.usersService.verifyEmail(signupVerifyToken);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    this.log.debug(this.login.name, dto);
    const { email, password } = dto;
    return await this.usersService.login(email, password);
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    this.log.debug(this.getUserInfo.name, userId);
    return await this.usersService.getUserInfo(userId);
  }
}
