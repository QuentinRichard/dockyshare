# Mon Projet React 18 en mode SSR

Ce projet est une application React 18 en mode SSR (Server-Side Rendering) sans utiliser Next.js ni Vite. Il utilise Express pour le rendu côté serveur.

---

## Structure du projet

```
/docky-front
  /src
    /client
      /components
        /Header
          Header.tsx
        /Footer
          Footer.tsx
        /Card
          Card.tsx
        /AdminTree
          AdminTree.tsx
        /LoginForm
          LoginForm.tsx
      /pages
        /Home
          Home.tsx
        /Login
          Login.tsx
        /Admin
          Admin.tsx
      /styles
        variables.css
        global.css
      App.tsx
      main.tsx
    /server
      server.ts
  /public
    index.html
  package.json
  tsconfig.json
  webpack.client.config.js
  webpack.server.config.js
```

---

## Prérequis

- Node.js 20+
- npm ou yarn

---

## Installation

1. Clone ce dépôt ou télécharge les fichiers.
2. Installe les dépendances :

```bash
npm install
```

---

## Scripts disponibles

- `npm run build:client` : Construit le bundle client.
- `npm run build:server` : Construit le bundle serveur.
- `npm run build` : Construit les bundles client et serveur.
- `npm start` : Démarre le serveur Express.
- `npm run dev` : Démarre le serveur en mode développement avec nodemon.

---

## Développement

Pour démarrer le projet en mode développement :

```bash
npm run dev
```

Le serveur redémarre automatiquement à chaque modification des fichiers.

---

## Production

Pour construire et démarrer le projet en mode production :

```bash
npm run build
npm start
```

L'application sera disponible à [http://localhost:3000](http://localhost:3000).

---

## Docker

Pour conteneuriser l'application avec Docker, utilise les fichiers `Dockerfile` et `docker-compose.yml` fournis.

---

## Notes supplémentaires

- **SSR** : Géré par Express et `react-dom/server`.
- **Style** : Thème vert et sable avec un fichier CSS global.
- **Pages** : Accueil, Login, Admin.
- **Composants** : Header, Footer, Card, LoginForm, AdminTree.
- **Navigation** : Gérée par `react-router-dom`.

---

## Auteurs

- [Ton nom]

---

## Licence

ISC
