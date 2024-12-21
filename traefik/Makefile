DOCKER_COMPOSE_CMD=docker-compose
NGROK_CMD=ngrok
NGROK_DOMAIN=multiply-natural-gelding.ngrok-free.app
DOCKER_PORT=443

# docker compose start
start:
	$(DOCKER_COMPOSE_CMD) up --build -d

# docker compose stop, make sure you pull down the containers to save up system resources
stop:
	$(DOCKER_COMPOSE_CMD) down

# to see logs from all
logs:
	$(DOCKER_COMPOSE_CMD) logs -f

# a quick restart command
restart: stop start

# quick restart with logs
lrestart: stop start clear logs

# to host the endpoint on ngrok domain
host:
	$(NGROK_CMD) http https://localhost:$(DOCKER_PORT) --url $(NGROK_DOMAIN)

# Combined restart and host command
r: restart host
