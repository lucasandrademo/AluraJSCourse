export class employee{
    constructor(name, salary, cpf){
        this._name = name;
        this._salary = salary;
        this._cpf = cpf;
        this._password;
    }

    legalize(password){
        return password == this._password;
    }

    createPassword(password){
        this._password = password;
    }
}