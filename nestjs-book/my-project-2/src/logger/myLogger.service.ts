import { ConsoleLogger } from '@nestjs/common';

export class MyLoggerService extends ConsoleLogger {
  log(message: any, context?: string) {
    super.log(message, context);
    this.doSomething();
  }
  debug(message: any, context?: string) {
    super.debug(message, context);
    this.doSomething();
  }
  error(message: any, trace?: string, context?: string) {
    super.error(message, trace, context);
    this.doSomething();
  }
  warn(message: any, context?: string) {
    super.warn(message, context);
    this.doSomething();
  }
  verbose(message: any, context?: string) {
    super.verbose(message, context);
    this.doSomething();
  }

  private doSomething() {
    // 로깅에 관련된 부가 로직을 추가한다.
    // ex. DB에 저장
  }
}
