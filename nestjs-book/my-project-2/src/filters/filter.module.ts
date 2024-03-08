import { Logger, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './httpExceptionFilter';

@Module({
  providers: [
    Logger, // HttpExceptionFilter 여기에 Logger 때문에 의존성 주입해줌
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
})
export class FilterModule {}
