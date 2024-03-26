import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private logger: Logger) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> | Promise<Observable<any>> {
    // console.log('Before...');
    const { method, url, body } = context.getArgByIndex(0);
    this.logger.log(`Request to ${method} ${url}`);
    // const now = Date.now();
    // return next.handle().pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
    return next
      .handle()
      .pipe(
        tap((data) =>
          this.logger.log(`Response from ${method} ${url} \n response: ${JSON.stringify(data)}`),
        ),
      );
  }
}
