import { Controller, Get, Logger, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonService } from './common/common.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(
    private readonly appService: AppService,
    private readonly commonService: CommonService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/common-hello')
  getCommonHello(): string {
    return this.commonService.hello();
  }

  /**
   * ParseIntPipe가 없으면 id의 타입이 number여도 클라이언트에서 문자열로 넘길 수 있음.
   * ParseIntPipe를 넣고 클라이언트에서 id를 문자열로 전송하면
   {
    "message": "Validation failed (numeric string is expected)",
    "error": "Bad Request",
    "statusCode": 400
    }
   * 이런 에러를 받게 됨
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    this.logger.debug(id, typeof id);
    return id;
  }
}
