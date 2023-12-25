from typing import Union
from fastapi import FastAPI
from dataclasses import dataclass

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


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}