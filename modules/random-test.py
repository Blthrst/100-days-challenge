import random

print(random.random())

print(random.randrange(0, 6))

print(random.randint(6, 10))

arr = [1, 2, 3, 4]

random.shuffle(arr)

print(arr)

print(random.choice([1, 2, 3, 4]))