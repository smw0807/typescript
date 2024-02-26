import { ArgumentMetadata, Injectable, Logger, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  private readonly logger = new Logger(ValidationPipe.name);
  transform(value: any, metadata: ArgumentMetadata) {
    this.logger.debug('value', value);
    this.logger.debug('metadata', metadata);
    return value;
  }
}
