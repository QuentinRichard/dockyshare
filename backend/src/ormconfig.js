import { AppDataSource } from './data-source';

export = {
  type: AppDataSource.type,
  host: AppDataSource.host,
  port: AppDataSource.port,
  username: AppDataSource.username,
  password: AppDataSource.password,
  database: AppDataSource.database,
  entities: AppDataSource.entities,
  migrations: AppDataSource.migrations,
  subscribers: AppDataSource.subscribers,
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  synchronize: true,
};