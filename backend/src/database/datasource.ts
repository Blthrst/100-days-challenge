import { MySQLOptions } from './options';
import { DataSource, DataSourceOptions } from 'typeorm';

const MySqlDataSource = new DataSource(
  MySQLOptions as DataSourceOptions,
);

export default MySqlDataSource