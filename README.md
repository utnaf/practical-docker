# Practical Docker

We have a simple Express app that serves a JSON.

## Requirements

- NodeJS or [nvm](https://nvm.sh)
- Docker Desktop

If you don't have docker installed [check this out](https://docs.docker.com/docker-for-mac/install/).

## Run

```
docker build --tag practical-docker:latest .
docker run -p 3000:3000 practical-docker
```

Visit http://localhost:3000.
