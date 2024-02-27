import { IsString, MinLength, MaxLength, IsEmail, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  readonly name: string;

  @IsString()
  @IsEmail()
  @MaxLength(60)
  readonly email: string;

  @IsString()
  @Matches(/^[A-Za-z\d!@#$%^&*()]{8, 30}$/) //영문 대소문자 또는 특수문자로 이뤄진 8~30자 문자열
  readonly password: string;
}
