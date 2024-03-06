import { Injectable } from '@nestjs/common';
import { WinstonModuleOptions, utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as winston from 'winston';

@Injectable()
export class WinstonLoggerService {
  createWinstonModuleOptions(): WinstonModuleOptions {
    return {
      transports: [
        new winston.transports.Console({
          level: process.env.NODE_ENV === 'production' ? 'info' : 'silly',
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike('MyApp', { prettyPrint: true }),
          ),
        }),
      ],
    };
  }
}
