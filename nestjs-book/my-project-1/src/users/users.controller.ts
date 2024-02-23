import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  BadRequestException,
  Header,
  Redirect,
  Logger,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // return this.usersService.create(createUserDto);
    const { email, name } = createUserDto;
    this.logger.debug('params : ', createUserDto);
    return `[POST] users/create : ${email}, ${name}`;
  }

  @Get()
  findAll(@Res() res: Response) {
    /**
     * @Res 데코레이터를 이용해 응답객체를 다룰 수도 있다.
     */
    const users = this.usersService.findAll();
    return res.status(200).send(users);
  }

  @Redirect('http://localhost:3000/users', 301)
  @Header('Custom', 'Test Header')
  @Get(':id')
  findOne(@Param('id') id: string) {
    if (+id < 1) {
      throw new BadRequestException('id는 0보드 큰 값이어야 합니다.');
    }
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Delete(':id/memo/:memoId')
  deleteUserMemo(
    @Res() res: Response,
    @Param('id') id: string,
    @Param('memoId') mId: string,
  ) {
    return res.status(200).send({
      id: id,
      memoId: mId,
    });
  }
}
