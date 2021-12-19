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