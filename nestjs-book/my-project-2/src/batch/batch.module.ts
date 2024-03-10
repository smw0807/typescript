import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { BatchContorller } from './batch.controller';
import { TaskService2 } from './task.service';
// import { TaskService } from './batch.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [
    // TaskService
    TaskService2,
  ],
  controllers: [BatchContorller],
})
export class BatchModule {}
