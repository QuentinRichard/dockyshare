import { redis } from "../data-source";

export const getCache = async (key: string) => {
//QRI  const data = await redis.get(key);
//QRI  return data ? JSON.parse(data) : null;
return null;
};

export const setCache = async (key: string, value: any, ttl: number = 3600) => {
//QRI  await redis.set(key, JSON.stringify(value), "EX", ttl);
};

export const delCache = async (key: string) => {
//QRI  await redis.del(key);
};
