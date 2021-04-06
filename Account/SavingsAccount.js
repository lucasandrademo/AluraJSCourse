import { bankAccount } from "./BankAccount.js";

export class savingsAccount extends bankAccount{
    constructor(initialBalance, agency, client){
        if(initialBalance < 100){
            throw new Error("You need at least a initial value equal or above $100,00")
        }
        super(initialBalance, agency, client)
    }

    withdraw(amount){
        const tax = 0;
        return this._withdraw(amount, tax);
    }
}
