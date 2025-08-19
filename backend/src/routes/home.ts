import { Hono } from 'hono';
import { authMiddleware } from '../middleware/auth';
import { PropertyRepository } from '../repositories/PropertyRepository';
import { logger } from '../utils/logger';
import { getCache, setCache } from '../utils/cache';

const home = new Hono();
home.use('*', authMiddleware);

home.get('/tree', async (c) => {
  //QRI logger.info('Fetching property tree', { userId: c.get('userId') });
//   const cacheKey = 'property_tree';
//   const cachedTree = await getCache(cacheKey);
//   if (cachedTree) {
//     logger.debug('Returning cached property tree');
//     return c.json(cachedTree);
//   }

//   const trees = await PropertyRepository.findTree();
//   await setCache(cacheKey, trees);
//   logger.info('Fetched property tree from DB', { count: trees.length });
//   return c.json(trees);
  return c.json({trees:[]});
});

export default home;
