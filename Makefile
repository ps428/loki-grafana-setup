DOCKER_COMPOSE_CMD=docker-compose
NGROK_DOMAIN=cunning-helped-crab.ngrok-free.app

start:
	$(DOCKER_COMPOSE_CMD) up --build -d

stop:
	$(DOCKER_COMPOSE_CMD) down

host:
	ngrok http http://localhost:3001 --url $(NGROK_DOMAIN)
