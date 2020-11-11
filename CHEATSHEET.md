# Practical Docker Cheatsheet

Not a _real_ cheatsheet, but here you can find all the commands we will use in this repo, plus some useful links.

## Docker CLI

### Building

```
docker build --tag practical-docker:latest .
```

### Running

```bash
docker run -p 3000:3000 practical-docker

# connect to a network with --network optino
docker run -p 3000:3000 --network practical-docker-net practicaldocker

# set environment variable with -e option
docker run -p=7474:7474 -p=7687:7687 \
  -e NEO4J_AUTH=neo4j/password \
  --network practical-docker-net \
  --name pratical_docker_neo4j \
  neo4j:4.1
```

### Network

```
docker network create practical-docker-net
```

## Docker Compose

```bash
# run the system
docker-compose up

# run the system in deamon mode
docker-compose up -d

# run the system and rebuild the image
docker-compose up --build

# turn off the system running in deamon mode
docker-compose down

# watch logs
docker-compose logs -f [container_name]

# open a shell in the container
docker-compose exec [container_name] bash
```

## Resources

- [A more exhaustive cheatsheet](https://dockerlabs.collabnix.com/docker/cheatsheet/)
- [docker-compose.yml Cheatsheet](https://devhints.io/docker-compose)
- [Docker Compose Manual](https://docs.docker.com/compose/)
- [Docker CLI Manual](https://docs.docker.com/engine/reference/commandline/cli/)

**Pro tip**: find a shitload of cheatsheets at https://devhints.io/
