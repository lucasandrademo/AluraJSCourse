import { employee } from "./Employee.js";

export class manager extends employee{
    constructor(name, salary, cpf) {
        super(name, salary, cpf);
        this._bonificacao = 1.1;
    }
}