import { Controller, Post } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';

@Controller('batches')
export class BatchContorller {
  constructor(private scheduler: SchedulerRegistry) {} // 1

  @Post('/start-sample')
  start() {
    const job = this.scheduler.getCronJob('cronSample'); //2

    job.start(); //3
    console.log('start!!! ', job.lastDate());
  }

  @Post('/stop-sample')
  stop() {
    const job = this.scheduler.getCronJob('cronSample'); //2

    job.stop(); //3
    console.log('stop!!! ', job.lastDate());
  }
}
