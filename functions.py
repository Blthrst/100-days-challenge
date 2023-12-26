def calculate(first: float, operator: str, second: float):
    try:
        match operator:
            case "+":
                return first + second
            case "-":
                return first - second
            case "*":
                return first * second
            case ":":
                if second == 0:
                    return {"error": "can't divide by zero"}
                return first/second
            case _:
                return {"error": "unknown operator"}

    except:
        return {"error": "calculation error"}