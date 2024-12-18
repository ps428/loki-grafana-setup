DOCKER_COMPOSE_CMD=docker-compose
NGROK_CMD=ngrok
NGROK_DOMAIN=cunning-helped-crab.ngrok-free.app
DOCKER_PORT=9001

# docker compose start
start:
	$(DOCKER_COMPOSE_CMD) up --build -d

# docker compose stop, make sure you pull down the containers to save up system resources
stop:
	$(DOCKER_COMPOSE_CMD) down

# a quick restart command
restart: stop start

# to host the endpoint on ngrok domain
host:
	$(NGROK_CMD) http http://localhost:$(DOCKER_PORT) --url $(NGROK_DOMAIN)

# Combined restart and host command
r: restart host
