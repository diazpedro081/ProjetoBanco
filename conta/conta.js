// Class abstrata
export class conta{
    constructor(saldoInicial, cliente, agencia){

    if(this.constructor == conta){
        throw new Error ("Você não deveria instaciar um objeto do tipo conta diretamente, pois essa é uma class abstrata");
    }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if(novoValor instanceof cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //Metodo abstrato
    sacar(valor){
        throw new Error ("O metodo sacar da conta é abstrato.");
    }
    
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        this._saldo += valor;
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}