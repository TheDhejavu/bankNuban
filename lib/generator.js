/**
     * Set attributes on generate method
     * @param { String} code
     * @param {String} nuban
*/
class NJbank{
    constructor(options){
        this.digits = [3,7,3,3,7,3,3,7,3,3,7,3];
        this.options = {
            accountNumber: 0
        };
        this.accountNumber = this.options.accountNumber;
        Object.assign(this.options, options);
    }
    generate(code){
        this.bankUniqueCode = code;
        this.nuban = this.randomNumberGenerator();
        this.checksum = 0;
        this.accountNumber = 0;

        //CHECK FOR ERRORS
        if(typeof this.bankUniqueCode != "string" || this.bankUniqueCode.length != 3){
            console.log("ERROR:Bank unique code must be of length 3 and must be a string");
            return null;
        }
        if(typeof this.nuban != "string" || this.nuban.length != 9 ){
            console.log("ERORR:The NUBAN must be of length 9 and must be a string ");
            return null;
        }
        this.checksum = this.checkSum();
        this.accountNumber = this.nuban+""+this.checksum;
        return this.accountNumber
    }
    set(code, nuban){
        this.bankUniqueCode = code;
        this.nuban = nuban;
        this.checksum = this.checkSum();
        this.accountNumber = this.nuban+""+this.checksum;
        if(isNaN(this.checksum)){
            console.log("ERROR: Invalid bank code or NUBAN")
            return null;
        }else{
            return this.accountNumber
        }
    }
    checkSum(){
        //The check digits algorithm
        //STEP 1.
        this.accountNumber = this.bankUniqueCode+""+this.nuban;
        this.accountNumber = this.accountNumber.split("");
        let total = 0;
        let modulo =0;

        for(let i=0; i < this.accountNumber.length; i++){
            total += this.accountNumber[i]* this.digits[i];
        }
        modulo = (total % 10 );
        //STEP 2.
        this.checksum = 10 - modulo;
        this.checksum = (this.checksum == 10)? 0 : this.checksum;

        //SETP 3.
        return this.checksum;
    }
    randomNumberGenerator(){
        var rndNumber =  (Math.floor((Math.random()*900000000) + 100000000)).toString();
        return rndNumber;
    }
}

module.exports = NJbank;

const NJbankNumber = new NJbank();
//FOR FIRST BANK
console.log("FIRST BANK")
console.log(`::::::${NJbankNumber.generate("011")}`)

//FOR ACCESS BANK
console.log("ACCESS BANK")
console.log(`::::::${NJbankNumber.generate("044")}`)

//FOR HIGH STREET
console.log("HIGH STREET")
console.log(`::::::${NJbankNumber.generate("125")}`)
//FOR HIGH STREET
console.log("HIGH STREET")
console.log(`::::::${NJbankNumber.set("123", "682177105")}`)