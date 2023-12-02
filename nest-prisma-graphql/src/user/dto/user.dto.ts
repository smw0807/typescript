import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: '사용자 등록 DTO' })
export class UserCreatetDto {
  @Field(() => String, { description: '사용자 이름' })
  name: string;
  @Field(() => String, { description: '이메일' })
  email: string;
}
