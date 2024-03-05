import { Body, Controller, Post, Logger, Query, UseGuards, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UsersService } from './users.service';
import { ValidationPipe } from 'src/common/validation.pipe';
import { AuthGuard } from 'src/guard/authGuard';
import { UserInfo } from './models/UserInfo';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/decorator/user';
import { UserData } from 'src/decorator/userData';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @UseGuards(AuthGuard)
  @Post() //{{api}}/users
  async createUser(@Body(ValidationPipe) dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto;
    await this.usersService.createUser(name, email, password);
  }

  @Post('/email-verify') //{{api}}/users/email-verify?signupVerifyToken=dudhfusdhfusdh
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    const { signupVerifyToken } = dto;
    return await this.usersService.verifyEmail(signupVerifyToken);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    const { email, password } = dto;
    return await this.usersService.login(email, password);
  }

  @UseGuards(AuthGuard)
  @Get('/info')
  async getUserInfo(@User() user: UserInfo): Promise<UserInfo> {
    this.logger.debug(`=======[${this.getUserInfo.name}]=======`);
    this.logger.debug(user);
    const { id: userId } = user;
    return this.usersService.getUserInfo(userId);
  }

  @UseGuards(AuthGuard)
  @Get('/username')
  async getUserName(@UserData('name') name: string): Promise<string> {
    this.logger.debug(`=======[${this.getUserName.name}]=======`);
    this.logger.debug(name);
    return name;
  }
}
