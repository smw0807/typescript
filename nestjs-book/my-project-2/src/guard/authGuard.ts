import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const tokenInfo = this.verifyToken(request);

    if (tokenInfo) {
      request.user = {
        name: tokenInfo.name,
        email: tokenInfo.email,
        userId: tokenInfo.userId,
      };
      return true;
    }
    return false;
  }

  // 토큰 검증 및 사용자 정보 추출
  private verifyToken(request: Request) {
    const jwtString = request.headers.authorization.split('Bearer ')[1];
    return this.authService.verify(jwtString);
  }
}
