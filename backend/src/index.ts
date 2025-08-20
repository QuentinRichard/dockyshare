import "reflect-metadata";
import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import { AppDataSource } from "./data-source";
import { logger, loggerMiddleware } from './utils/logger';
import auth from './routes/auth';
import admin from './routes/admin';
import home from './routes/home';

AppDataSource.initialize()
  .then(() => {
    logger.info("Data Source a été initialisé !");

    const app = new Hono();
    app.use('*', cors());
    app.use('*', loggerMiddleware);

    app.route('/auth', auth);
    app.route('/admin', admin);
    app.route('/home', home);

    app.get('/health', (c) => {
      logger.info('Health check called');
      return c.json({ status: 'OK' });
    });

    const port = 3001;
    logger.info(`Server is running on port ${port}`);
    serve({ fetch: app.fetch, port });
  })
  .catch((err) => {
    logger.error("Erreur lors de l'initialisation de la Data Source 2:", err);
  });
