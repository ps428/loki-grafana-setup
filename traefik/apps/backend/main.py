from fastapi import FastAPI

import logging

logging.basicConfig(level=logging.INFO)

app = FastAPI()


@app.get("/")
def read_root():
    logging.info("Root endpoint hit")
    return {"message": "Hello, world!"}


@app.get("/ping")
def read_ping():
    logging.info("Ping endpoint hit")
    return {"ping": "Ping!"}


@app.get("/pong/")
def read_pong():
    logging.info("Pong endpoint hit")
    return {"pong": "Pong!"}


@app.get("/echo/{m}")
def read_echo(m):
    logging.info("Echo endpoint hit")
    return {"echo up": f"{str(m).upper()}!", "echo down": f"{str(m).lower()}!"}
