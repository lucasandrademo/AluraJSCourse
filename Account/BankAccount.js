import { bankClient } from "../BankClient.js";

export class bankAccount{
    constructor(initialBalance, agency, client){
        if(this.constructor == bankAccount){
            throw new Error("bankAccount class should not be instantiated directly")
        }
        this._balance = initialBalance;
        this._agency = agency;
        this._client = client;
    }

    set agency(agency){
        this._agency = agency;
    }
    get agency(){
        return this._agency;
    }

    get balance(){
        return this._balance;
    }

    set client(client){
        if(client instanceof bankClient){
            this._client = client;
        }
    }
    get client(){
        return this._client
    }

    withdraw(amount){
    }

    _withdraw(amount, tax){
        if(this._balance <= amount){
            return null;
        }
        return this._balance -= amount*(1+tax);
    }

    deposit(amount){
        this._deposit(amount);
    }

    _deposit(amount){
        if(amount < 0){
            return null;
        }
        return this._balance += amount;
    }

    transfer(amount, account){
        const tax = 0;
        return this._transfer(amount, account, tax);
    }

    _transfer(amount, account, tax){
        if(this._balance <= amount){
            return null;
        }
        this._withdraw(amount, tax);
        account._deposit(amount);
        return this._balance;
    }

}