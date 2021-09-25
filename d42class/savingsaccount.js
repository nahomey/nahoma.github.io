"use strict";

// const acc = require("./account.js"); //with node need the name of your file with your functions here
// const Account = acc.Account; //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */
/**
 *  saving class
 */
class SavingsAccount extends Account {
    /**
     * Constructor for creating a new SavingsAccount object
     * 
     * @param {number} number the number for the account
     * @param {number} int means for interest rate
     */
    constructor(number, int) {
        super(number);
        this._interest = int;
    }

    /**
     * @returns {number} interest rate
     */
    getInterest() {
        return this._interest;
    }

    /**
     * 
     * @param {number} newInterest is the new Interest rate
     * @returns {undefined} resets the interest property
     */
    setInterest(newInterest) {
            this._interest = newInterest;
        }
        /**
         * @returns{number} returns the balance current
         */
    addInterest() {
            const result =
                this.getBalance() + this.getBalance() * (this._interest / 100);
            this._balance = result;
        }
        /**
         *
         * @returns{undefined} returns interest added
         */
    endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest}`;
    }

    /**
     * tostring method
     * @returns {string} string of the account
     */
    toString() {
        return (
            "SavingsAccount " +
            this._number +
            ": balance: " +
            this._balance +
            " interest: " +
            this._interest
        );
    }


}

// const testSavingsAcc = new SavingsAccount(1222, 5);
// console.log("interest rate: " + testSavingsAcc.getInterest());
// testSavingsAcc.deposit(1000);
// console.log("balance is 1000: " + testSavingsAcc.getBalance());
// console.log(testSavingsAcc);






// exports.SavingsAccount = SavingsAccount;