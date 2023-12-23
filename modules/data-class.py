from dataclasses import dataclass

@dataclass(unsafe_hash = True, eq = True)
class User:
    age: int
    name: str
    mail: str

user = User(34, "Peter", "peter@example.com")


another_user = User(13, "John", "john@example.com")

print(user)
print(user.__hash__())
print(user.__eq__(another_user))