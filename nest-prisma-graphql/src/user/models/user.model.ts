import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: '사용자' })
export class UserModel {
  @Field(() => Int, { description: '사용자 아이디' })
  id: number;
  @Field(() => String, { description: '사용자 이름' })
  name: string;
  @Field(() => String, { description: '사용자 이메일' })
  email: string;
}
