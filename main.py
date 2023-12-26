from typing import Union
from fastapi import FastAPI
from fastapi.responses import FileResponse
from dataclasses import dataclass
from functions import calculate as calcFunc

@dataclass
class User:
    username: str
    role: str

app = FastAPI()

users = [User(f"username_{i}", "common") for i in range(10)]

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/users")
def read_users():
    return users

@app.get("/index")
def index():
    return FileResponse("public/index.html")

@app.get("/calculate/{first}/{operator}/{second}")
def calculate(first: float, operator: str, second: float):
    return calcFunc(first, operator, second)


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}