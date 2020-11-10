# Practical Docker

We have a simple Express app that serves a static JSON.

## Requirements

- NodeJS or [nvm](https://nvm.sh)
- Docker Desktop
- Neo4j Desktop (or a running Neo4j instance with Movie DB)
- Neo4j Driver for JavaScript (`npm i neo4j-driver`)

If you don't have Docker installed [check this out](https://docs.docker.com/docker-for-mac/install/).

## Run

```
docker build --tag practicaldocker:latest
docker run -p 3000:3000 practicaldocker
```

Visit (localhost:3000)[http://localhost:3000].

### Dev

For developing you can use the `watch` command to restart the server automatically when a file changes.

```
npm run watch
```
