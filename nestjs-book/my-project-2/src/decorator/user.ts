import { ExecutionContext, createParamDecorator } from '@nestjs/common';

// 사용자 정보 데코레이터 //createParamDecorator 팩터리 데커레이터를 이용하여 User 데커레이터를 선언
export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest(); // 실행 컨텍스트에서 요청 객체를 얻어온다.
  return request.user; //AuthGuard에서 설정한 유저 객체르 반환한다. req.user가 타입이 any였다면 이제 User라는 타입을 가지게 되어 타입 시스템의 장점도 누릴 수 있게 된다?
});
