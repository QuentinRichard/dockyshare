
npm run typeorm migration:run -d src/data-source.ts

docker run --name db -e POSTGRES_PASSWORD=postgres -p 5432:5432 postgres