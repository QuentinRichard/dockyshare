import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../client/App';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour servir les fichiers statiques
app.use(express.static(path.resolve(__dirname, '../../public')));

// Route pour le SSR
app.get('*', (req, res) => {
  const indexHtml = fs.readFileSync(
    path.resolve(__dirname, '../../public/index.html'),
    'utf-8'
  );
  const context = {};
  const render = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const html = indexHtml.replace('<!--ssr-outlet-->', render);

  res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
