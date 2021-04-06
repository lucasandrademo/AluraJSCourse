import { bankAccount } from "./BankAccount.js";

export class salaryAccount extends bankAccount{
    constructor(client){
        super(0, 100, client);
    }

    deposit(amount){
        throw new Error("This account only recieve by transfer and withdraw");
    }

    withdraw(amount){
        const tax = 0;
        return this._withdraw(amount, tax);
    }

}