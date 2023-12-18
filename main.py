from functions import calculate, switch

isActive = 1

while isActive == 1:
    first = input("First number: ")
    second = input("Second number: ")

    op = input("Choose operation to do:\n1) Addition\n2) Subtraction\n3) Multiplication\n4) Division: ")

    calculate(first, second, op)

    desire = input('''Continue session? Type "yes" or "no": ''')

    isActive = switch(desire)


