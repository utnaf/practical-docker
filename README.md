# Practical Docker

We have a simple Express app that serves a JSON.

## Requirements

- NodeJS or [nvm](https://nvm.sh)
- Neo4j Driver for JavaScript (`npm i neo4j-driver`)

If you don't have Docker installed [check this out](https://docs.docker.com/docker-for-mac/install/).

Run `npm install` to install Neo4j Driver for JavaScript.

## Run

First we need to create a network to allow the two container to communicate:

```
docker network create practical-docker-net
```

And then we can start our Neo4j container:

```
docker run -p=7474:7474 -p=7687:7687 \
  -e NEO4J_AUTH=neo4j/password \
  --network practical-docker-net \
  --name pratical_docker_neo4j \
  neo4j:4.1
```

Finally, we build and run our image:

```
docker build --tag practical-docker:latest .
docker run -p 3000:3000 --network practical-docker-net practical-docker
```

Visit http://localhost:3000.

**Note**: both containers are connected to our initially created network.

### Dev

For developing you can use the `watch` command to restart the server automatically when a file changes.

```
npm run watch
```
