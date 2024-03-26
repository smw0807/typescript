import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { WinstonLoggerService } from './winstonLogger.service';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      useClass: WinstonLoggerService,
    }),
  ],
})
export class WinstonLoggerModule {}
