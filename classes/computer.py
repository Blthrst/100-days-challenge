from machinery import Machinery

class Computer (Machinery):

    def __init__(self, cpu, ram, price, vram):
        super().__init__(cpu, ram, price)
        self.__vram = vram

    @property
    def vram(self):
        return self.__vram
    
    @vram.setter
    def vram(self, vram):
        self.__vram = vram

    def info(self):
        print(f"CPU: {self.cpu}\nRAM: {self.ram}\nVRAM: {self.vram}\n\nPrice: {self.price}")