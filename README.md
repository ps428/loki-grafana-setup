# Loki Grafana Logs

A basic 101 project to have logs in Grafana from Loki using Promtail. 

## Features:
1. GitHub Oauth login
2. GItHub Organization based filtering for restricted access
3. Allow specific GitHub ids to be admin by default
4. Quick hosting using `ngrok`
5. Users can split the output based on container name.

## How to configure?
Add these values to the .env
```
GITHUB_ORGANIZATION # Your GitHub Organization for which you want restricted access
GF_AUTH_GITHUB_CLIENT_ID # Github OauthApp client id
GF_AUTH_GITHUB_CLIENT_SECRET # GitHub OauthApp client secret
GF_SERVER_ROOT_URL # The server domain - url of your ngrok domain, like https://XXXX.YYYY.ngrok-free.app
GF_SERVER_DOMAIN # The server domain, like XXXX.YYYY.ngrok-free.app
```

## How to run?
1. Start the docker in your machine, for Linux use
```bash
sudo systemctl start docker
```

2. Run the docker compose
```bash
docker-compose up --build -d
```

### Or just check the [Makefile](./Makefile) :moai:

3. Go to [`http://localhost:3001/login`](http://localhost:3001/login) to open the Grafana GUI.
    - Login with using the default user name `admin` and password `admin`. Set the new password on the prompted page. ![Admin login](./screenshots/admin.png)
    - Go to `Data Source` and search for Loki. Select that.![Data Source selection](./screenshots/data_source.png)![Loki search](./screenshots/loki_search.png)
    - In the connection url, enter `http://loki:3100` and go to end of the page to `Save & Test`. ![Connection URL](./screenshots/connection_url.png)

4. Now once the Loki is connected, go to the [`Explore`](http://localhost:3001/explore) page and make a basic query to see logs, select `container` in label and select the backend container in the value. ![Running the query](./screenshots/running_the_query.png) 
5. Now go in a terminal do 
```bash
curl http://localhost:8000
```
6. Once done, you can click on fetch query (top right Blue icon), the logs would be there :rocket:! ![Logs are here!](./screenshots/logs_are_here.png)

## Closing the containers!
Don't forget to close this after use.
```bash
docker-compose down
```

## Project setup
```bash
.
├── apps
│   ├── backend
│   │   ├── Dockerfile
│   │   ├── main.py
│   │   └── requirements.txt
│   └── frontend
│       ├── Dockerfile
│       ├── package.json
│       ├── package-lock.json
│       └── pages
│           └── index.js
├── docker-compose.yml
├── loki
│   ├── loki-config.yml
│   └── promtail-config.yml
└── README.md
```
