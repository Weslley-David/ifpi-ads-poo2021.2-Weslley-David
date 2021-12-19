/*
1. As classes Carro, Veiculo e CarroEletrico são bem semelhantes. Refatore as
classes para que os atributos duplicados não sejam mais necessários.
*/
class Veiculo {
    placa: string;
    ano: number;
}
class Carro extends Veiculo{
    modelo: string;
}
class CarroEletrico extends Carro{
    autonomiaBateria: number;
}

/* 
2. Crie uma classe Calculadora com:
a. Dois tributos privados chamados _op1 e _op2;
b. Crie um construtor que inicializa os atributos;
c. Crie um método chamado adicionar que retorna a soma dos dois atributos;
d. Teste a classe.
*/
class Calculadora{
    protected _op1: number; // private -- tive de mudar para protected para funcionar a Calculadora científica
    protected _op2: number;
    constructor(n_1: number, n_2: number) {
        this._op1 = n_1;
        this._op2 = n_2;
    }

    public somar(): number{
        return this._op1 + this._op2;
    }
}
let operacao: Calculadora = new Calculadora(2,3);
console.log(operacao.somar());

/*
3. Crie uma classe chamada CalculadoraCientifica que herda da classe Calculadora
do exercício passado e:
a. Implemente um método chamado exponenciar que retorne o _op1 elevado
ao _op2;
b. Teste a classe;
c. Foi necessária alguma modificação em Calculadora para o acesso aos
atributos?
    R: Apenas nos modificadores, alteração de private para protected.
*/

class CalculadoraCientifica extends Calculadora{
    public exponenciar(): number {
        return Math.pow(this._op1, this._op2);
    }
}

let operacao_cientifica: CalculadoraCientifica = new CalculadoraCientifica(3,3);
console.log(operacao_cientifica.somar());
console.log(operacao_cientifica.exponenciar());

/*
4. Implemente na classe Banco o método renderJuros(numero: String): number,
onde:
a. É passado por parâmetro o número de uma poupança e feita uma consulta
para ver se a conta existe. Note que a consulta não se altera sendo Conta
ou Poupança;
b. Caso a poupança seja encontrada, teste se realmente se trata de uma
poupança com o operador instanceof, desconsidere a operação caso
contrário;
c. Caso seja, faça um cast e invoque o método renderJuros da própria
instância encontrada;
d. Teste o método da classe Banco passando tanto um número de poupança
como de conta passados inseridos anteriormente.
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

    public get saldo(): number{
        return this._saldo;
    }
    public get numero(): string{
        return this._numero;
    }
}

class Poupanca extends Conta {
    private _taxaJuros: number;
    public renderJuros(): void {
        this.depositar(this.saldo * this._taxaJuros/100);
    }
    get taxaJuros(): number {
        return this._taxaJuros
    }
    constructor(numero: string, saldo: number,taxaJuros: number ) {
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
        }
}

class Banco {
    private _contas: Conta[] = [];
    public inserir(c: Conta): void {
        let contaConsultada = this.consultar(c.numero);
        if (contaConsultada == null) {
		    this._contas.push(c);
        }
    }
    public consultar(numero: String): Conta {
        let contaProcurada: Conta;
        for (let c of this._contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }

    private consultarIndice(numero: String): number {
        let indice: number = -1;
            for (let i: number = 0; i < this._contas.length; i++) {
                if (this._contas[i].numero == numero) {
                    indice = i;
                    break;
                }
            }
            return indice;
        }

    public alterar(c: Conta): void {
            let indice = this.consultarIndice(c.numero);
            if (indice != -1) {
                this._contas[indice] = c;
            }
        }
    
    public excluir(numero: String): void {
            let indice: number = this.consultarIndice(numero);
                if (indice != -1) {
                    for (let i: number = indice; i < this._contas.length; i++) {
                    this._contas[i] = this._contas[i + 1];
                }
                this._contas.pop();
            }
    }

    depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

    public sacar(numero: string, valor: number){
        let conta = this.consultar(numero);
        if(conta != null){
            conta.sacar(valor);
        }else{
            console.log("conta não encontrada.");
        }
    }

    public transferir(numeroCredito: string, numeroDebito: string, valor: number){
        let numeroCredito_adress: Conta = this.consultar(numeroCredito);
        let numeroDebito_adress2: Conta = this.consultar(numeroCredito);

        if(numeroCredito_adress != null || numeroDebito_adress2 != null){
            numeroDebito_adress2.transferir(numeroCredito_adress, valor);
        }
    }
    public quant_contas(){
        return banco._contas.length;
    }
    public quant_dinheiro(){
        let total: number = 0;
        for (let i: number = 0; i < this._contas.length; i++) {
            total = total + this._contas[i].saldo;
        }
        return total;
    }
    public media_bank(){
        let contas: number = this.quant_contas();
        let dinheiro: number = this.quant_dinheiro();
        return dinheiro/contas;
    }

    renderJuros(numero: String) {
		let contaConsultada = this.consultar(numero);
		
		if (contaConsultada instanceof Poupanca) {
			let poupanca: Poupanca = <Poupanca> contaConsultada;
			poupanca.renderJuros();
		}
	}
}
let banco : Banco = new Banco();

banco.inserir(new Conta("1", 1500));
banco.inserir(new Poupanca("2", 1500, 0.7));
console.log(banco);
banco.renderJuros("1");
banco.renderJuros("2");
console.log(banco);

/*
Suponha duas classes Produto e ProdutoPerecivel. Produto tem atributos privados
_id, _descricao, _quantidade e _valor. Já ProdutoPerecivel tem as mesmas
características de Produto, porém possui a mais um atributo chamado
_dataValidade (https://www.javatpoint.com/typescript-date-object).
Produto possui dois métodos: repor e darBaixa, onde ambos somam e
subtraem uma quatidade passada por parâmetro do atributo quantidade. Além
disso, um produto perecível possui um método que diz se um produto está válido
ou não comparando sua data de validade com a data atual.
*/
var hoje = '20211220';//yyyymmdd
class Produto {
    private _id: string;
    private _descricao: string;
    private _quantidade: number;
    private _valor: number;

    constructor(id: string, descricao: string, quantidade: number, valor: number) {
        this._id = id;
        this._descricao = descricao;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    repor(quantidade_param: number): void{
        this._quantidade = this._quantidade + quantidade_param;
    }
    dar_baixa(quantidade_param: number){
        this._quantidade = this._quantidade - quantidade_param;
    }

    public get id(): string{
        return this._id;
    }

    public get descricao(): string{
        return this._descricao;
    }
}
class ProdutoPerecivel extends Produto{
    private _dataValidade: string;
    valido(): string{
        if(parseInt(this._dataValidade) < parseInt(hoje)){
            return 'vencido';
        }
    }
    constructor(id: string, descricao: string, quantidade: number, valor: number, validade: string){
        super(id, descricao, quantidade, valor);
        this._dataValidade = validade;
    }
}
class Estoque {
    private _produtos: Produto[] = [];
    public inserir(p: Produto): void {
        let contaConsultada = this.consultar(p.id, p.descricao);
        if (contaConsultada == null) {
		    this._produtos.push(p);
        }
    }
    public consultar(numero: string, nome: string): Produto {
        let produtoProcurado: Produto;
        for (let p of this._produtos) {
            if (p.id == numero || p.descricao == nome) {
                produtoProcurado = p;
                break;
            }
        }
        return produtoProcurado;
    }
    private consultarIndice(id: String): number {
        let indice: number = -1;
            for (let i: number = 0; i < this._produtos.length; i++) {
                if (this._produtos[i].id == id) {
                    indice = i;
                    break;
                }
            }
        return indice;
    }

    public excluir(numero: String): void {
        let indice: number = this.consultarIndice(numero);
            if (indice != -1) {
                for (let i: number = indice; i < this._produtos.length; i++) {
                this._produtos[i] = this._produtos[i + 1];
            }
            this._produtos.pop();
        }
    }
    public repor(id: string, nome: string, quant: number){
        let contaConsultada = this.consultar(id, nome);
		
		if (contaConsultada instanceof Produto) {
			let poupanca: Produto = <Produto> contaConsultada;
			poupanca.repor(quant);
		}
    }
    public dar_baixa(id: string, nome: string, quant: number){
        let contaConsultada = this.consultar(id, nome);
		
		if (contaConsultada instanceof Produto) {
			let poupanca: Produto = <Produto> contaConsultada;
			poupanca.dar_baixa(quant);
		}
    }
    public lst_vencido(){
        for (let i: number = 0; i < this._produtos.length; i++) {
            if(this._produtos[i] instanceof ProdutoPerecivel){
               // temp = this._produtos[i];
            }
        }
    }
}

//testes
let estoque : Estoque = new Estoque();
console.log(estoque);
estoque.inserir(new Produto("1", "biscoito salgado", 90, 25));
estoque.inserir(new ProdutoPerecivel("2", "biscoito doce", 90, 25, "20220303"));//yyyymmdd
estoque.inserir(new ProdutoPerecivel("3", "biscoito doce", 90, 25, "20190303"));
estoque.inserir(new ProdutoPerecivel("3", "biscoito recheado", 90, 25, "20220303"));
console.log(estoque);
estoque.excluir("1");
estoque.repor("2", "biscoito doce", 90);
estoque.dar_baixa("3", "biscoito recheado", 90);
console.log(estoque);

//faltou a letra "F".
