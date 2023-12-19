class Server:
    def __init__(self, ram, cpu):
        self.cpu = cpu
        self.ram = ram

    def info(self):
        print(f"CPU: {self.cpu}\nRAM: {self.ram}")

server = Server("16 Gb", "4 GHz")

server.info()