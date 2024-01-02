import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserCreatetDto } from './dto/user.dto';
import { UserModel } from './models/user.model';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserModel], { description: '사용자 목록' })
  async findManyUserAll(): Promise<UserModel[]> {
    return this.userService.findManyUserAll();
  }

  @Mutation(() => UserModel, { description: '사용자 등록' })
  async createUser(@Args('data') data: UserCreatetDto): Promise<UserModel> {
    return this.userService.createUser(data);
  }
}
