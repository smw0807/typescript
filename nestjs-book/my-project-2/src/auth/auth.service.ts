import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import authConfig from 'src/config/authConfig';
import * as jwt from 'jsonwebtoken';

interface User {
  id: string;
  name: string;
  email: string;
}
@Injectable()
export class AuthService {
  constructor(@Inject(authConfig.KEY) private readonly config: ConfigType<typeof authConfig>) {}

  /**
   * 토큰 발급
   * @param user 사용자 정보
   * @returns 토큰
   */
  login(user: User) {
    const payload = { ...user };
    return jwt.sign(payload, this.config.jwtSecret, {
      expiresIn: '1d',
      audience: 'example.com',
      issuer: 'example.com',
    });
  }

  // 토큰 검증
  verify(jwtString: string) {
    try {
      const payload = jwt.verify(jwtString, this.config.jwtSecret) as (jwt.JwtPayload | string) &
        User;
      const { name, id, email } = payload;
      return {
        name,
        userId: id,
        email,
      };
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
