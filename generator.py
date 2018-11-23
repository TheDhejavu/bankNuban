from random import randrange
#   * Set attributes on generate method
#   * @param { String} bank unique code
#   * @param {String} nuban


class NJbank:
    def __init__(self):
        self.digits = [3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3]
        self.accountNumber = 0
        self.bankUniqueCode = 0
        self.nuban = 0
        self._checksum = ""

    def generate(self, bankUniqueCode):
        self.nuban = self.nubanNumberGenerate()
        self.bankUniqueCode = bankUniqueCode
        # CHECK FOR ERRORS
        if(len(self.bankUniqueCode) != 3):
            raise Exception("Bank unique code must be of length 3 and must be a string")

        self._checksum = self.checkSum()
        self.accountNumber = self.nuban+""+self._checksum
        return self.accountNumber

    def getAccountNumber(self, bankUniqueCode, nuban):
        self.bankUniqueCode = bankUniqueCode
        self.nuban = nuban
        #  CHECK FOR ERRORS
        if(len(self.bankUniqueCode) != 3):
            raise Exception("Bank unique code must be of length 3 and must be a string")

        if(len(self.nuban) != 9):
            raise Exception("Nuban Number must be of length 9 and must be a string")

        self._checksum = self.checkSum()
        self.accountNumber = self.nuban+""+self._checksum
        return self.accountNumber

    def checkSum(self):
        # The check digits algorithm
        # STEP 1.

        self.accountNumber = self.bankUniqueCode+""+self.nuban
        self.accountNumber = list(self.accountNumber)
        total = 0
        modulo = 0

        for x in range(len(self.accountNumber)):
            total += int(self.accountNumber[x])*self.digits[x]

        # STEP 2.
        modulo = (total % 10)
        self._checksum = str(10 - modulo)
        if(self._checksum == 10):
            self._checksum = 0
        else:
            self._checksum = self._checksum

        # SETP 3
        return self._checksum

    def nubanNumberGenerate(self):
        nubanNumber = randrange(100000000, 900000000)
        return str(nubanNumber)


if __name__ == "__main__":
    NJbankNumber = NJbank()
    #  USE CASES.....

    print(NJbankNumber.generate("123"))
    print(NJbankNumber.getAccountNumber("123", "682177105"))

    #  BANK UNIQUE CODES..
    bankUniqueCodes = {
        "access_bank": "123"
    }
