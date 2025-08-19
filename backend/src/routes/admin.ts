import { Hono } from 'hono';
import { authMiddleware } from '../middleware/auth';
import { PropertyRepository } from '../repositories/PropertyRepository';
import { validate } from 'class-validator';
import { Property } from '../entities/Property';
import { logger } from '../utils/logger';
import { getCache, setCache, delCache } from '../utils/cache';

const admin = new Hono();
admin.use('*', authMiddleware);

admin.get('/tree', async (c) => {
  logger.info('Fetching property tree', { userId: c.get('userId') });
  const cacheKey = 'property_tree';
  const cachedTree = await getCache(cacheKey);
  if (cachedTree) {
    logger.debug('Returning cached property tree');
    return c.json(cachedTree);
  }

  const trees = await PropertyRepository.findTree();
  await setCache(cacheKey, trees);
  logger.info('Fetched property tree from DB', { count: trees.length });
  return c.json(trees);
});

admin.get('/property/:id', async (c) => {
  const id = parseInt(c.req.param('id'));
  const property = await PropertyRepository.findOne({
    where: { id },
    relations: ['children']
  });
  if (!property) return c.json({ error: 'Non trouvé' }, 404);
  return c.json(property);
});

admin.post('/property', async (c) => {
  const { name, parentId, content } = await c.req.json();
  const property = new Property();
  property.name = name;
  property.content = content;
  property.parent = parentId ? await PropertyRepository.findOne({ where: { id: parentId } }) : null;

  const errors = await validate(property);
  if (errors.length > 0) {
    return c.json({ errors: errors.map(e => e.constraints) }, 400);
  }

  await PropertyRepository.save(property);
  await delCache('property_tree');
  logger.info(`Property created: ${property.id}`);
  return c.json(property, 201);
});

admin.put('/property/:id', async (c) => {
  const id = parseInt(c.req.param('id'));
  const { name, content } = await c.req.json();
  const property = await PropertyRepository.findOne({ where: { id } });
  if (!property) return c.json({ error: 'Non trouvé' }, 404);

  property.name = name;
  property.content = content;
  await PropertyRepository.save(property);
  await delCache('property_tree');
  logger.info(`Property updated: ${property.id}`);
  return c.json(property);
});

admin.delete('/property/:id', async (c) => {
  const id = parseInt(c.req.param('id'));
  await PropertyRepository.delete(id);
  await delCache('property_tree');
  logger.info(`Property deleted: ${id}`);
  return c.json({ success: true });
});

export default admin;
