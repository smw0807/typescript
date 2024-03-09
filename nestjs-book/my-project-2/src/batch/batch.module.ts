import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskService } from './batch.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [TaskService],
})
export class BatchModule {}
