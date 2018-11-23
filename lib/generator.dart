import 'dart:math';
import 'dart:core';
/**
     * Set attributes on generate method
     * @param { String} bank unique code
     * @param {String} nuban
*/
class CustomError extends StateError{
   CustomError(String msg): super(msg);
}
class NJbank{
    String accountNumber;
    String bankUniqueCode;
    String nuban;
    String _checksum;
    List<int> digits;

    NJbank(){
      //.CHeck Sum Digits
      this.digits = [3,7,3,3,7,3,3,7,3,3,7,3];
    }
    String generate(String bankCode){
         this.nuban = this.nubanNumberGenerate();
         this.bankUniqueCode = bankCode;
        //CHECK FOR ERRORS
        if(this.bankUniqueCode.length != 3){
            print("Bank unique code must be of length 3 and must be a string");
        }

        this._checksum = this.checkSum();
        this.accountNumber = this.nuban+""+this._checksum;
        return this.accountNumber;
    }
    String getAccountNumber(String bankCode, String nuban){
        this.bankUniqueCode = bankCode;
        this.nuban = nuban;
         //CHECK FOR ERRORS
        if(this.bankUniqueCode.length != 3){
            throw new CustomError("Bank unique code must be of length 3 and must be a string");
        }
        if(this.nuban.length != 9 ){
            throw new CustomError("Bank unique code must be of length 3 and must be a string");
        }
        this._checksum = this.checkSum();
        this.accountNumber = this.nuban+""+this._checksum;
        return this.accountNumber;
    }
    String checkSum(){
       //The check digits algorithm
      //STEP 1.

        var accountNumber = this.bankUniqueCode+""+this.nuban;
        var total = 0 , modulo = 0;
        List accountNum = accountNumber.split("");

        for(int x =0; x < accountNum.length;x++){
            total += int.parse(accountNum[x])* this.digits[x];
        }
        modulo = (total % 10 );
        //STEP 2.
        this._checksum = (10 - modulo).toString();
        this._checksum = (this._checksum == 10)? 0 : this._checksum;

        //SETP 3.
        return this._checksum;
    }
    String nubanNumberGenerate(){
      var rnd = new Random();
      var rndNumber = "";
      for(var i=0;i < 9;i++){
        rndNumber = rndNumber  + rnd.nextInt(9).toString();
      }
      return rndNumber;
    }
}

void main(){
  var NJbankNumber = NJbank();
  //USE CASES.....
  print(NJbankNumber.generate("123"));

  print(NJbankNumber.getAccountNumber("123","682171054"));


  //BANK UNIQUE CODES..
  const bankUniqueCodes = {
    "access_bank": "123"
  };
}
