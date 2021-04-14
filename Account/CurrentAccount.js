
import { bankAccount } from "./BankAccount.js";

export class currentAccount extends bankAccount{
    static NumCurrentAccount = 0;
    constructor(agency, client){
        super(0, agency, client);
        bankAccount.NumCurrentAccount++;
    }

    withdraw(amount){
        const tax = 0.1;
        return this._withdraw(amount, tax);
    }

}