
export class bankClient{
    _name;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    get name(){
        return this._name;
    }

    constructor(nome, cpf){
        this._name = nome;
        this._cpf = cpf;
    }
}