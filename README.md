# Practical Docker

We have a simple Express app that serves a JSON.

## Requirements

- NodeJS or [nvm](https://nvm.sh)
- Neo4j Driver for JavaScript (`npm i neo4j-driver`)

If you don't have Docker installed [check this out](https://docs.docker.com/docker-for-mac/install/).

Run `npm install` to install Neo4j Driver for JavaScript.

## Run

`make up`

Visit http://localhost:3000.

### Push Image to DockerHub

The current image is pushed to https://hub.docker.com/repository/docker/utnaf/practical-docker. Please create your own DockerHub repository and adjust the naming in the Makefile accordingly.

```
make docker-build
```

### Dev

For developing you can use the `watch` command to restart the server automatically when a file changes.

```
npm run watch
```

## Deploy

This image is deployed to my local Ubuntu Server machine. Create your own server and ajust the data in the Makefile accordingly.

```
make deploy
```

### docker-compose.yml

This is the `docker-compose.yml` file on the server.

```yaml
version: "3"

services:
  app:
    image: utnaf/practical-docker:latest
    ports:
      - 80:3000
    environment:
      - NEO4J_HOST=neo4j
      - NEO4J_USERNAME=neo4j
      - NEO4J_PASSWORD=password123

  neo4j:
    image: neo4j:4.1
    ports:
      - 7474:7474
      - 7687:7687
    environment:
      - NEO4J_AUTH=neo4j/password123
    volumes:
      - ./neo4j-data:/data
```

### Deploy Script

This is the deploy script

```bash
#! /usr/bin/bash

cd practical-docker
docker-compose down
docker-compose pull app
docker-compose up -d --force-recreate
```

### Server Requirements

- Docker
- docker-compose
- Login into docker hub `docker login`
