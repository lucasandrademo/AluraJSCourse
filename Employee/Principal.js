import { employee } from "./Employee.js";

export class principal extends employee{
    constructor(name, salary, cpf) {
        super(name, salary, cpf);
        this._bonificacao = 2;
    }
}