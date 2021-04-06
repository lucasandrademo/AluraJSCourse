
export class bankClient{
    constructor(nome, cpf, password){
        this._name = nome;
        this._cpf = cpf;
        this._password = password
    }

    get cpf(){
        return this._cpf;
    }

    get name(){
        return this._name;
    }

    legalize(password){
        return password == this._password;
    }
}