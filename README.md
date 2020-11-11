# Practical Docker

We have a simple Express app that serves a JSON.

## Requirements

- NodeJS or [nvm](https://nvm.sh)
- Neo4j Driver for JavaScript (`npm i neo4j-driver`)

If you don't have Docker installed [check this out](https://docs.docker.com/docker-for-mac/install/).

Run `npm install` to install Neo4j Driver for JavaScript.

## Run

```bash
# services up
make up

# services down
make down

# watch logs
make logs-app
make logs-neo4j

# open shell in the container
make sh

```

Visit http://localhost:3000

### Dev

For developing you can use the `watch` command to restart the server automatically when a file changes.

```
npm run watch
```
