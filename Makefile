up:
	docker-compose up -d

down:
	docker-compose down

logs-app:
	docker-compose logs -f app

logs-neo4j:
	docker-compose logs -f neo4j

sh:
	docker-compose exec app bash

docker-build:
	docker build --tag utnaf/practical-docker:latest .
	docker push utnaf/practical-docker

deploy:
	ssh utnaf@192.168.43.99 './deploy.sh'