import { MySQLOptions } from "./options";
import { DataSource, DataSourceOptions } from "typeorm";

export const MySqlDataSource = new DataSource(MySQLOptions as DataSourceOptions);