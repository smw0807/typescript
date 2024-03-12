import {
  Body,
  Controller,
  Post,
  Logger,
  Query,
  UseGuards,
  Get,
  Inject,
  UseInterceptors,
} from '@nestjs/common';
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
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { ErrorsInterceptor } from 'src/interceptor/error.interceptor';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './event/user-created.event';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private commandBus: CommandBus,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly myLogger: Logger,
  ) {}

  @UseGuards(AuthGuard)
  @Post() //{{api}}/users
  async createUser(@Body(ValidationPipe) dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto;
    const command = new CreateUserCommand(name, email, password);
    return this.commandBus.execute(command);
    // await this.usersService.createUser(name, email, password);
  }

  @Post('/email-verify') //{{api}}/users/email-verify?signupVerifyToken=dudhfusdhfusdh
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    const { signupVerifyToken } = dto;
    return await this.usersService.verifyEmail(signupVerifyToken);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    this.myLogger.debug('dto', dto);
    const { email, password } = dto;
    return await this.usersService.login(email, password);
  }

  @UseGuards(AuthGuard)
  @Get('/info')
  async getUserInfo(@User() user: UserInfo): Promise<UserInfo> {
    // this.logger.debug(`=======[${this.getUserInfo.name}]=======`);
    // this.logger.debug(user);
    this.myLogger.error('error log');
    this.myLogger.warn('warn log');
    this.myLogger.debug(this.getUserInfo.name, user);
    const { id: userId } = user;
    return this.usersService.getUserInfo(userId);
  }

  @UseInterceptors(ErrorsInterceptor)
  @UseGuards(AuthGuard)
  @Get('/username')
  async getUserName(@UserData('name') name: string): Promise<string> {
    // throw new InternalServerErrorException();
    this.logger.debug(`=======[${this.getUserName.name}]=======`);
    this.logger.debug(name);
    return name;
  }
}
