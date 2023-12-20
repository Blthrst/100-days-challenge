class Machinery:

    __parent_class = "Machinery"

    @staticmethod
    def printParent():
        print(f"Parent class is {Machinery.__parent_class}")

    def __init__(self, ram, cpu, price):
        self.__cpu = cpu
        self.__ram = ram
        self.__price = price
    
    @property
    def cpu(self):
        return self.__cpu
    
    @cpu.setter
    def cpu(self, cpu):
        self.__cpu = cpu
    
    @property
    def ram(self):
        return self.__ram
    
    @ram.setter
    def ram(self, ram):
        self.__ram = ram
    
    @property
    def price(self):
        return self.__price
    
    @price.setter
    def price(self, price):
        self.__price = price


    def info(self):
        print(f"CPU: {self.cpu}\nRAM: {self.ram}")

    def setRam(self, ram):
        self.__ram = ram


