import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  // 매 초마다 실행
  @Cron('* * * * * *', { name: 'cronTask' })
  handleCron() {
    this.logger.debug('Tasks Called');
  }

  // 앱 실행 후 3초 후에 실행
  @Cron(new Date(Date.now() + 3 * 1000), { name: 'cronTask2' })
  handleCron2() {
    this.logger.debug('Called after 3 seconds');
  }

  // 매주 월~금 새벽 1시에 실행
  @Cron(CronExpression.MONDAY_TO_FRIDAY_AT_1AM, { name: 'cronTask3' })
  handleCron3() {
    this.logger.debug('Called at 1AM every weekday');
  }
  // 3초 후에 실행되고, 3초마다 반복
  @Interval(3000)
  handleInterval() {
    this.logger.debug('Called every 3 seconds');
  }

  // 5초 후 실행
  @Timeout(5000)
  handleTimeout() {
    this.logger.debug('Called after 5 seconds');
  }
}
