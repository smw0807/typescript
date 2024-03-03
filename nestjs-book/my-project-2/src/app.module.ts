import { Module } from '@nestjs/common';
// import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/vaildationSchema';
import dbConfig from './config/dbConfig';
import { DatabaseModule } from './database/database.module';
// import { APP_GUARD } from '@nestjs/core';
// import { AuthGuard } from './guard/authGuard';
// import { LoggerMiddleware } from './middleware/logger1';
// import { UsersController } from './users/users.controller';
// import { Logger2Middleware } from './middleware/logger2';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production',
      load: [emailConfig, dbConfig],
      isGlobal: true,
      validationSchema,
    }),
    DatabaseModule,
    CoreModule,
    UsersModule,
  ],
  controllers: [AppController],
  //가드에 종속성 주입을 사용해서 다른 프로바이더를 주입해서 사용하고 싶으면 커스텀 프로바이더로 선언해야 한다.
  providers: [AppService /*, { provide: APP_GUARD, useClass: AuthGuard }*/],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware, Logger2Middleware)
//       .exclude({ path: '/users', method: RequestMethod.GET })
//       .forRoutes(UsersController);
//   }
// }
