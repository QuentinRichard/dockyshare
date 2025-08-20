# Mon Projet Fullstack

## Description
Projet fullstack avec :
- Backend : Node.js + Hono + TypeORM + PostgreSQL + Redis + Winston
- Frontend : React + SSR
- Nginx : Reverse proxy

## Prérequis
- Docker
- Docker Compose

## Installation
1. Cloner le dépôt
2. Lancer les conteneurs :
   ```bash
   docker-compose up --build
   ```   

## Postgres connection

sudo psql -U postgres -p 5432 -h localhost -W

into docker compose
sudo psql -U postgres -p 5435 -h localhost -W