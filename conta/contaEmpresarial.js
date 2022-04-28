import { conta } from "./conta.js";

export class contaEmpresarial extends conta{
    constructor(cliente){
        super(0,cliente,100)
    }

    sacar(valor){
        const taxa = 1.2;
        return this._sacar(valor, taxa);
    }
}