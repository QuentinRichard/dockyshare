import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Property } from "./entities/Property";
import Redis from "ioredis";
import dotenv from 'dotenv';

dotenv.config();

export const redis = new Redis({
  host: "redis",
  port: 6379,
});

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "docky_share",
  synchronize: true,
  logging: true,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
  subscribers: [],
});
