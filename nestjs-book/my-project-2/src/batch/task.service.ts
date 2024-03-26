import { Injectable, Logger } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class TaskService2 {
  private readonly logger = new Logger(TaskService2.name);

  //1
  constructor(private schedulerRegistry: SchedulerRegistry) {
    this.addCronJob(); //2
  }

  addCronJob() {
    const name = 'cronSample';

    const job = new CronJob('* * * * * *', () => {
      this.logger.warn(`run!! ${name}`);
    });
    this.schedulerRegistry.addCronJob(name, job);
    this.logger.warn(`job ${name} added!`);
  }
}
