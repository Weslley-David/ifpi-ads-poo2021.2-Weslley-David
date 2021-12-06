
/*
1. Crie uma classe Calculadora que tenha:
a. Dois atributos privados (operando1 e 2) do tipo number;
b. Dois métodos públicos, cada um representando uma operação básica;
c. Um construtor onde são passados os operandos e que esses inicializam os
atributos;

Teste a classe calculadora e seus métodos. Tente acessar os atributos
diretamente e verifique o que acontece.

    A propriedade 'operado_1' é particular e somente é acessível na classe 'Calculadora'.
*/
class Calculadora {
    private _operado_1: number;
    private _operado_2: number;
    constructor(n_1: number, n_2: number) {
        this._operado_1 = n_1;
        this._operado_2 = n_2;
    }
    public somar(): number{
        return this._operado_1 + this._operado_2;
    }
    public multiplicar(): number{
        return this._operado_1 * this._operado_2;
    }
}
let calc: Calculadora = new Calculadora(4,3);
//console.log(calc.multiplicar());
//calc._operado_1 = 0;
//console.log(calc.somar());

/*
2. Crie uma classe Hora que tenha:
a. Três atributos privados e definidos no construtor chamados hora, minutos e
segundos;
b. Métodos públicos para ler hora, minuto e segundo de forma individual;
c. Um método público para retorne a hora no formato “hh:mm:ss”.
*/

class Hora {
    private _hora: number;
    private _minuto: number;
    private _segundo: number;
    constructor(hh: number, mm: number, ss: number) {
        this._hora = hh;
        this._minuto = mm;
        this._segundo = ss;
    }
    public hora(): number{
        return this._hora;
    }
    public minuto(): number{
        return this._minuto;
    }
    public segundo(): number{
        return this._segundo;
    }
    public complete_timer(){
        return `${this._hora} : ${this._minuto} : ${this._segundo}`;
    }
}

let horas: Hora = new Hora(2,3,4);
//horas._hora = 0;
console.log(horas.complete_timer());
console.log(horas.hora());
console.log(horas.minuto());
console.log(horas.segundo());

/*
3. Altere as implementações da classe Banco das aulas anteriores para que:
a. O array de contas seja privado;
b. O método consulta por índice seja privado;
c. Os demais métodos sejam públicos.
*/

class Conta {
    private _numero: string;
    private _saldo: number;
    constructor(numero: string, saldoinicial: number) {
        this._numero = numero;
        this._saldo = saldoinicial;
    }
    sacar(valor: number):void{
        this._saldo = this._saldo - valor;
    }
    depositar(valor: number): void{
        this._saldo = this._saldo + valor;
    }
    transferir(contaDestino: Conta, valor: number): void{
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    get saldo(): number{
        return this._saldo;
    }
    get numero(): string{
        return this._numero;
    }
}
class Banco {
    private contas: Conta[] = [];
    public inserir(c: Conta): void {
        if(this.consultarIndice(c.numero) == -1){
            this.contas.push(c);
        }else{
            console.log("parâmetros já existentes.");
        }
    }
    public consultar(numero: String): Conta {
        let contaProcurada: Conta;
        for (let c of this.contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }

    private consultarIndice(numero: String): number {
        let indice: number = -1;
            for (let i: number = 0; i < this.contas.length; i++) {
                if (this.contas[i].numero == numero) {
                    indice = i;
                    break;
                }
            }
            return indice;
        }
        
    public alterar(c: Conta): void {
            let indice = this.consultarIndice(c.numero);
            if (indice != -1) {
                this.contas[indice] = c;
            }
        }
    
    public excluir(numero: String): void {
            let indice: number = this.consultarIndice(numero);
                if (indice != -1) {
                    for (let i: number = indice; i < this.contas.length; i++) {
                    this.contas[i] = this.contas[i + 1];
                }
                this.contas.pop();
            }
    }
    public sacar(numero: string, valor: number){
        let conta: number = this.consultarIndice(numero);
        if(this.consultarIndice(numero) != -1){
            this.contas[conta].sacar(valor);
        }else{
            console.log("conta não encontrada.");
        }
    }
    public transferir(numeroCredito: string, numeroDebito: string, valor: number){
        let numeroCredito_adress: number = this.consultarIndice(numeroCredito);
        let numeroDebito_adress2: number = this.consultarIndice(numeroCredito);

        if(numeroCredito_adress < 0 || numeroDebito_adress2 < 0){
            console.log('Erro, uma das contas não foi encontrada.');
        }else{
            banco.sacar(numeroDebito, valor);
            banco.contas[numeroDebito_adress2].depositar(valor);
        }
    }
    public quant_contas(){
        return banco.contas.length;
    }
    public quant_dinheiro(){
        let total: number = 0;
        for (let i: number = 0; i < this.contas.length; i++) {
            total = total + this.contas[i].saldo
            /*if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }*/
        }
        return total;
    }
    public media_bank(){
        let contas: number = this.quant_contas();
        let dinheiro: number = this.quant_dinheiro();
        return dinheiro/contas;
    }
    public depositar(){

    }
}
//let contas: Conta[] = [];
let banco: Banco = new Banco();
//let c1: Conta = new Conta("1", 100);
banco.inserir(new Conta("1", 100));
banco.inserir(new Conta("2", 100));
banco.inserir(new Conta("3", 100));
banco.inserir(new Conta("4", 100));
console.log(banco);
banco.sacar("4", 25);
banco.transferir("2", "4", 70)
console.log(banco);
console.log("fim");