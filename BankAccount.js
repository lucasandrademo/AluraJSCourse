import { bankClient } from "./BankClient.js";

export class bankAccount{
    static NumAccount = 0;
    _agency;
    _balance;
    _client;

    set agency(agency){
        this._agency = agency;
    }
    get agency(){
        return this._agency;
    }

    set client(client){
        if(client instanceof bankClient){
            this._client = client;
        }
    }
    get client(){
        return this._client
    }

    get balance(){
        return this._balance;
    }

    constructor(agency, client){
        this.agency = agency;
        this.client = client;
        this._balance = 0;
        bankAccount.NumAccount++;
    }

    withdraw(amount){
        if(this._balance <= amount){
            return "Sorry, you don't have enough balance";
        }
        this._balance -= amount;
        return this._balance
    }

    deposit(amount){
        if(amount < 0){
            return "Sorry, Wrong argument";
        }
        this._balance += amount;
        return this._balance;
    }

    transfer(amount, account){
        if(this._balance <= amount){
            return "Sorry, you don't have enough balance";
        }
        this.withdraw(amount);
        account.deposit(amount);
        return this._balance;
    }

}