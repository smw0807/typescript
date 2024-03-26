import { Module } from '@nestjs/common';
import { MyLoggerService } from './myLogger.service';

@Module({
  providers: [MyLoggerService],
  exports: [MyLoggerService],
})
export class MyLoggerModule {}
