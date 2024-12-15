DOCKER_COMPOSE_CMD=docker-compose

start:
	$(DOCKER_COMPOSE_CMD) up --build -d

stop:
	$(DOCKER_COMPOSE_CMD) down

host:
	ngrok http http://localhost:3001
