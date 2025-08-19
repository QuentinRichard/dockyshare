import { Hono } from 'hono';
import { signJwt } from '../utils/jwt';
import { UserRepository } from '../repositories/UserRepository';
import bcrypt from 'bcryptjs';
import { validate } from 'class-validator';
import { User } from '../entities/User';
import { logger } from '../utils/logger';

const auth = new Hono();

auth.post('/register', async (c) => {
  const { identifiant, motDePasse } = await c.req.json();
  const user = new User();
  user.identifiant = identifiant;
  user.motDePasse = await bcrypt.hash(motDePasse, 10);

  const errors = await validate(user);
  if (errors.length > 0) {
    return c.json({ errors: errors.map(e => e.constraints) }, 400);
  }

  await UserRepository.save(user);
  const token = signJwt({ userId: user.id });
  logger.info(`User registered: ${user.id}`);
  return c.json({ token });
});

auth.post('/login', async (c) => {
  const { identifiant, motDePasse } = await c.req.json();
  const user = await UserRepository.findByIdentifiant(identifiant);
  if (!user || !(await bcrypt.compare(motDePasse, user.motDePasse))) {
    logger.warn(`Failed login attempt for user: ${identifiant}`);
    return c.json({ error: 'Identifiant ou mot de passe incorrect' }, 401);
  }
  const token = signJwt({ userId: user.id });
  logger.info(`User logged in: ${user.id}`);
  return c.json({ token });
});

export default auth;
