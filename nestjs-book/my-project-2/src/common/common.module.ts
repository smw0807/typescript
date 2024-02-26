import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { ValidationPipe } from './validation.pipe';

@Module({
  providers: [CommonService, ValidationPipe],
  exports: [CommonService, ValidationPipe],
})
export class CommonModule {}
