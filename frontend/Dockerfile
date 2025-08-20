FROM node:20-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

FROM node:20-alpine as build
WORKDIR /app
COPY --from=base /app/package*.json  .
COPY --from=base /app/dist/*  ./dist/
COPY --from=base /app/public/*  /public/

EXPOSE 3000
CMD ["npm", "start"]
