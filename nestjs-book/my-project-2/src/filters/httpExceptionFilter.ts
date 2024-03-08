import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

/**
 * @Catch 데코레이터는 처리되지 않은 모든 예외를 잡으려고 할 때 사용한다.
 */
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private logger: Logger) {}
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    /**
     * Nest가 처리하는 대부분의 예외는 HttpException 클래스를 상속받는다.
     * HttpException 이 아닌 예외는 알 수 없는 에러이므로 InternalServerErrorException으로 처리한다.
     */
    if (!(exception instanceof HttpException)) {
      exception = new InternalServerErrorException();
    }

    const response = (exception as HttpException).getResponse();

    const log = {
      timestamp: new Date(),
      url: req.url,
      response,
    };
    this.logger.log(log);

    res.status((exception as HttpException).getStatus()).json(response);
  }
}
