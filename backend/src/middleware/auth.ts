import { Context, Next } from 'hono';
import { verifyJwt } from '../utils/jwt';

export async function authMiddleware(c: Context, next: Next) {
  const authHeader = c.req.header('Authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return c.json({ error: 'Non autorisé' }, 401);
  }
  const token = authHeader.split(' ')[1];
  try {
    const payload = verifyJwt(token);
    //QRI c.set('userId', payload.userId);
    await next();
  } catch (error) {
    return c.json({ error: 'Token invalide' }, 401);
  }
}
