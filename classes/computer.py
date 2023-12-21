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
        try:
            self.__vram = int(vram)
        except ValueError as e:
            print("Incorrect value: " + str(e))
        finally:
            print("Closing vram setter...")

    def info(self):
        print(f"CPU: {self.cpu}\nRAM: {self.ram}\nVRAM: {self.vram}\n\nPrice: {self.price}")


comp = Computer("test", "test", 16000, 10)

comp.vram = "e"

