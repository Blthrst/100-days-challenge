import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import 'dotenv/config';

export const MySQLOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_NAME,
  entities: [join(__dirname, '*.entity.ts')],
  migrations: [join(__dirname, 'migrations', '*.{js,ts}')],
  migrationsRun: true,
  autoLoadEntities: true,
};
