def multDecorator(func):

    def decorator(x):
        print("powered-by-mult-decorator")
        func(x)
        print("-------------------------")
    
    return decorator


def outer(num): 
    @multDecorator
    def multiply(x):
        print(x*num)
    return multiply

mult = outer(2)

mult(2)
