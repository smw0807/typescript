// import { BadRequestException } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsString, MinLength, MaxLength, IsEmail, Matches } from 'class-validator';
import { NotIn } from 'src/utils/not-in';

export class CreateUserDto {
  // @Transform((params) => {
  //   console.log(params);
  //   return params.value;
  // })
  @Transform((params) => params.value.trim()) // 공백 제거하는 로직을 만들 수도 있다.
  // @Transform(({ value, obj }) => {
  //   //obj에는 현재 속성이 속해있는 객체를 가리키고 있기 때문에 아래와 같은 로직을 구현할 수도 있다.
  //   if (obj.password.includes(obj.name.trim())) {
  //     throw new BadRequestException('Password는 name과 같은 문자열을 포함할 수 없습니다.');
  //   }
  //   return value.trim();
  // })
  // 데커레이터를 이용한 커스텀 유효성 검사
  @NotIn('password', { message: 'password는 name과 같은 문자열을 포함할 수 없습니다.' })
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  readonly name: string;

  @IsString()
  @IsEmail()
  @MaxLength(60)
  readonly email: string;

  @IsString()
  @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/) //영문 대소문자 또는 특수문자로 이뤄진 8~30자 문자열
  readonly password: string;
}
