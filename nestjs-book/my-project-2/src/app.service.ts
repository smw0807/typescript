import { Injectable } from '@nestjs/common';
import { MyLoggerService } from './logger/myLogger.service';

@Injectable()
export class AppService {
  constructor(private myLogger: MyLoggerService) {}
  getHello(): string {
    this.myLogger.log('level: log');
    this.myLogger.error('level: error');
    this.myLogger.warn('level: warn');
    this.myLogger.debug('level: debug');
    this.myLogger.verbose('level: verbose');

    return 'Hello World!';
  }
}
