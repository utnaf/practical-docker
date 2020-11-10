# Practical Docker

We have a simple Express app that serves a static JSON.

## Requirements

- NodeJS or [nvm](https://nvm.sh)
- Docker Desktop

If you don't have docker installed [check this out](https://docs.docker.com/docker-for-mac/install/).

## Run

```
docker build --tag practicaldocker:latest
docker run -p 3000:3000 practicaldocker
```

Visit (localhost:3000)[http://localhost:3000].
