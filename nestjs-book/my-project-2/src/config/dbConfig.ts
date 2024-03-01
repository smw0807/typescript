import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
  type: process.env.DATABASE_TYPE as 'mysql',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  user: process.env.DATABASE_USERNAME,
  pass: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  sync: Boolean(process.env.DATABASE_SYNCRONIZE),
}));
