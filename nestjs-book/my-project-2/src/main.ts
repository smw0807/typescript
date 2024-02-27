import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

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
  await app.listen(port || 3000);
}
bootstrap();
