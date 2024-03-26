import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const UserData = createParamDecorator<string>((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return data ? request.user[data] : request.user;
});
