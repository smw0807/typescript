import { Logger, Module } from '@nestjs/common';
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
import { AuthModule } from './auth/auth.module';
import authConfig from './config/authConfig';
import { MyLoggerModule } from './logger/myLogger.module';
import { WinstonLoggerModule } from './logger/winstonLogger.module';
import { FilterModule } from './filters/filter.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { BatchModule } from './batch/batch.module';
import { HealthCheckController } from './healthCheck/health.check.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
// import { APP_FILTER } from '@nestjs/core';
// import { HttpExceptionFilter } from './filters/httpExceptionFilter';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production',
      load: [emailConfig, dbConfig, authConfig],
      isGlobal: true,
      validationSchema,
    }),
    WinstonLoggerModule,
    MyLoggerModule,
    DatabaseModule,
    CoreModule,
    UsersModule,
    AuthModule,
    FilterModule,
    BatchModule,
    TerminusModule,
    HttpModule,
  ],
  controllers: [AppController, HealthCheckController],
  //가드에 종속성 주입을 사용해서 다른 프로바이더를 주입해서 사용하고 싶으면 커스텀 프로바이더로 선언해야 한다.
  providers: [
    AppService /*, { provide: APP_GUARD, useClass: AuthGuard }*/,
    Logger,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
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
