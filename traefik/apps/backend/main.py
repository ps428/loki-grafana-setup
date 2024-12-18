from fastapi import FastAPI

import logging

logging.basicConfig(level=logging.INFO)

app = FastAPI()

@app.get("/")
def read_root():
    logging.info("Root endpoint hit")
    return {"message": "Hello, world!"}
