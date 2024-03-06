import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
// import { MyLoggerService } from './logger/myLogger.service';
// import { AuthGuard } from './guard/authGuard';
// import { logger3 } from './middleware/logger3';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('APP_PORT');

  // 글로벌 파이프 설정
  app.useGlobalPipes(
    new ValidationPipe({
      //class-transformer를 적용되게 하려면 transform 속성을 true로 주어야 한다.
      transform: true,
    }),
  );

  // 미들웨어 전역으로 적용하기
  // app.use(logger3);

  // 글로벌 가드 적용
  // app.useGlobalGuards(new AuthGuard());

  // 커스텀 로거를 전역으로 사용하기
  // app.useLogger(app.get(MyLoggerService));
  await app.listen(port || 3000);
}
bootstrap();
