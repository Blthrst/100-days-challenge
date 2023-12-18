def calculate(first, second, operator):
    x = float(first)
    y = float(second)

    if int(operator) == 1:
        print(x+y)
    elif int(operator) == 2:
        print(x-y)
    elif int(operator)== 3:
        print(x*y)
    elif int(operator) == 4:
        if y == 0:
            print("Can't divide by zero")
    else:
        print(x/y)

def switch(answer):
    if answer == "yes":
        return 1;
    elif answer == "no":
        return 0;
    else:
        print("Incorrect answer")
        return 1;
