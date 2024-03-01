import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import dbConfig from 'src/config/dbConfig';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  constructor(@Inject(dbConfig.KEY) private config: ConfigType<typeof dbConfig>) {}
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: this.config.type,
      host: this.config.host,
      port: this.config.port,
      username: this.config.user,
      password: this.config.pass,
      database: this.config.database,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: this.config.sync,
    };
  }
}
