from dataclasses import dataclass

@dataclass
class PyLinesDict:
    line_dict: dict


filename = "test-file.py"
py_lines = list()

with open(filename, "w") as file_obj:
    for i in range(10):
        file_obj.write(f"print(\"{i} iteration\")\n")

with open(filename, "r") as file_obj:
    for key, value in enumerate(file_obj):
        value.replace("\n", "")
        py_lines.append([key, value])

pld = PyLinesDict(dict(py_lines))

print(pld.line_dict)

    
