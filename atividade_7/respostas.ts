/*
1. Assinale verdadeiro ou falso:
a. (F) Objetos são modelos para classes;
b. (F) Atributos de uma classe devem ser obrigatoriamente inicializados para
que as classes compilem;
c. (V) Uma classe de cadastro é responsável por manter o controle de outras
classes mais simples, que chamamos de classes básicas;
d. (F) Uma variável declarada dentro de um método deve ser inicializada para
que a classe seja compilável;
e. (V) Uma variável que seja uma classe declarada em um método é
automaticamente inicializada com null;
f. (V) Construtores são rotinas especiais que servem para inicializar e
configurar os objetos no momento da instanciação;
g. (F) Construtores não possuem tipo de retorno e podem ou não ter
parâmetros;
h. (V) Uma classe pode ter várias instâncias;
*/

/*
2. Crie uma classe chamada triângulo que:
a. Possua 3 atributos inteiros representando os lados;
b. Crie um método que retorna true se os lados formarem um retângulo de
acordo com a regra: |b-c| < a < b+c;
c. Crie 3 métodos : ehIsoceles(), ehEquilatero() e ehEscaleto() que retorne
verdadeiro caso o triângulo seja um dos tipos relacionados ao nome do
método. Eles devem chamar antes de tudo, o método da questão b. e
retornar false se esse método já retornar false também;
*/
class triangulo {
    a: number;
    b: number;
    c: number;
    constructor(l1:number, l2:number, l3:number) {
        this.a = l1;
        this.b = l2;
        this.c = l3;
    }
    valida_triangulo(): boolean {
        return((Math.abs(this.b - this.c) < this.a) && (this.a < this.b + this.c));
    }
    
    ehIsoceles(): boolean {
        if(this.valida_triangulo){
            if(this.ehEquilatero()){
                return false;
            }
            else{
                return(this.a == this.b || this.a == this.c || this.b == this.c);
            }
        }else{
            return false;
        }
    }
    ehEquilatero(): boolean {
        if(this.valida_triangulo){
            return((this.a == this.b) && (this.a == this.c) && (this.b == this.c));
        }else{
            console.log("retorno");
            return false;
        }
    }
    ehEscaleno(): boolean {
        if(this.valida_triangulo){
            return(this.a != this.b && this.a != this.c && this.b != this.c);
        }else{
            return false;
        }
    }
}
let triangulo1: triangulo = new triangulo(3,3,3);
let triangulo2: triangulo = new triangulo(3,5,5);
let triangulo3: triangulo = new triangulo(3,5,100);
let triangulo4: triangulo = new triangulo(3,5,4);
//console.log(triangulo1.valida_triangulo());
//console.log(triangulo1.ehEquilatero());
//console.log(triangulo2.ehIsoceles());
//console.log(triangulo2.ehEquilatero());
//console.log(triangulo3.ehEscaleno());
//console.log(triangulo2.ehEquilatero());

/*
3. Atualize a implementação da classe Banco apresentada em sala de acordo com as
seguintes instruções:
a. Altere o método inserir para que não seja possível contas com mesmo
número;

b. sacar(String numero, double valor): pesquisa uma conta e realiza uma
operação de crédito com o valor passado.

c. transferir(String numeroCredito, String numeroDebito, double valor): realiza
uma procura por ambas as contas e chama o método transferir de uma
delas passando a conta de débito e o valor como parâmetros;

d. Crie 3 métodos: um que retorne a quantidade de contas, outro que retorne
o total de dinheiro depositado em todas as contas. Por fim, crie um método
que retorne a média do saldo das contas chamando os dois métodos
anteriores;
*/
class Conta {
    numero: string;
    saldo: number;
    constructor(numero: string, saldoinicial: number) {
        this.numero = numero;
        this.saldo = saldoinicial;
    }
    sacar(valor: number):void{
        this.saldo = this.saldo - valor;
    }
    depositar(valor: number): void{
        this.saldo = this.saldo + valor;
    }
    transferir(contaDestino: Conta, valor: number): void{
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
class Banco {
    contas: Conta[] = [];
    inserir(c: Conta): void {
        if(this.consultarIndice(c.numero) == -1){
            this.contas.push(c);
        }else{
            console.log("parâmetros já existentes.");
        }
    }
    consultar(numero: String): Conta {
        let contaProcurada: Conta;
        for (let c of this.contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }

    consultarIndice(numero: String): number {
        let indice: number = -1;
            for (let i: number = 0; i < this.contas.length; i++) {
                if (this.contas[i].numero == numero) {
                    indice = i;
                    break;
                }
            }
            return indice;
        }
        
    alterar(c: Conta): void {
            let indice = this.consultarIndice(c.numero);
            if (indice != -1) {
                this.contas[indice] = c;
            }
        }
    
    excluir(numero: String): void {
            let indice: number = this.consultarIndice(numero);
                if (indice != -1) {
                    for (let i: number = indice; i < this.contas.length; i++) {
                    this.contas[i] = this.contas[i + 1];
                }
                this.contas.pop();
            }
    }
    sacar(numero: string, valor: number){
        let conta: number = this.consultarIndice(numero);
        if(this.consultarIndice(numero) != -1){
            this.contas[conta].saldo = this.contas[conta].saldo - valor;
        }else{
            console.log("conta não encontrada.");
        }
    }
    transferir(numeroCredito: string, numeroDebito: string, valor: number){
        let numeroCredito_adress: number = this.consultarIndice(numeroCredito);
        let numeroDebito_adress2: number = this.consultarIndice(numeroCredito);

        if(numeroCredito_adress < 0 || numeroDebito_adress2 < 0){
            console.log('Erro, uma das contas não foi encontrada.');
        }else{
            banco.sacar(numeroDebito, valor);
            banco.contas[numeroDebito_adress2].saldo = this.contas[numeroDebito_adress2].saldo + valor;
        }
    }
    quant_contas(){
        return banco.contas.length;
    }
    quant_dinheiro(){
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
    media_bank(){
        let contas: number = this.quant_contas();
        let dinheiro: number = this.quant_dinheiro();
        return dinheiro/contas;
    }
}
//let contas: Conta[] = [];
let banco: Banco = new Banco();
//let c1: Conta = new Conta("1", 100);
banco.inserir(new Conta("1", 100));
banco.inserir(new Conta("2", 100));
banco.inserir(new Conta("3", 100));
banco.inserir(new Conta("4", 100));
//console.log(banco);
//banco.sacar("4", 25);
//banco.transferir("2", "4", 70)
//console.log(banco);
//console.log(banco.quant_contas());
//console.log(banco.quant_dinheiro());
//console.log(banco.media_bank());

/*
4. Crie uma implementação que simule um migroblog:
    a. Crie uma classe Postagem e nela:
    a. Crie os atributos:
        1. id do tipo number, representando o identificador da
        postagem;
        2. texto do tipo string, representando um texto da postagem;
        3. quantidadeCurtidas do tipo number.
    b. Crie um método chamado curtir que incrementa a quantidade
    curtidas;
    c. Crie um método chamado toString que retorna a concatenação da
    postagem com a quantidade de curtidas;

b. Crie uma classe Microblog e nela:
    a. Crie um array de classes Postagem;
    b. Crie um método que inclua uma postagem passada como
    parâmetro no array de postagens;
    c. Crie um método de excluir uma postagem que recebe um id
    passado por parâmetro. Para isso, efetue uma busca pelo id nas
    postagens do array e faça a exclusão de forma análoga à feita na
    classe Banco;
    d. Crie um método que retorna um array com a postagem mais
    curtida.
    e. Crie um método curtir em que se passa um id como parâmetro e a
    classe microblog pesquisa a postagem e chama seu método curtir
    da própria postagem;
    f. Crie um método toString que retorna a concatenação do “toString”
    de todas as postagens.
*/

class Postagem {
    id: number;
    texto: string;
    like: number;
    constructor(id: number, texto: string, like: number) {
        this.id = id;
        this.texto = texto;
        this.like = like;
    }
    curtir(){
        this.like++;
    }
    toString(){
        return(this.texto + " - "+ this.like);
    }
}
class Microblog {
    postagens: Postagem[] = [];
    
    add_post(post: Postagem): void {
            this.postagens.push(post);
    }
    consultarIndice(numero: number): number {
        let indice: number = -1;
            for (let i: number = 0; i < this.postagens.length; i++) {
                if (this.postagens[i].id == numero) {
                    indice = i;
                    break;
                }
            }
            return indice;
    }
    excluir(numero: number): void {
        let indice: number = this.consultarIndice(numero);
            if (indice != -1) {
                for (let i: number = indice; i < this.postagens.length; i++) {
                    this.postagens[i] = this.postagens[i + 1];
                }
            this.postagens.pop();
        }
    }
    hot_post(): Postagem{
        let most_liked: number = 0;
        let post_liked: Postagem = null;
        for (let i: number = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].like > most_liked){
                most_liked = this.postagens[i].like;
                post_liked = this.postagens[i];
            }
        }
        return post_liked;
    }
    curtir_post(post: number): void{
        let encontrou: number = this.consultarIndice(post);
        if (encontrou != -1) {
            this.postagens[encontrou].curtir();
        }else{
            console.log("post não encontrado");
        }
    }
    toString(){
        for (let i: number = 0; i < this.postagens.length; i++) {
            console.log(this.postagens[i].toString());
        }
    }
}
let microblog: Microblog = new Microblog();
microblog.add_post(new Postagem(1,"hello world", 1));
microblog.add_post(new Postagem(2,"ola mundo", 33));
microblog.add_post(new Postagem(3,"cubo esfera", 45));
microblog.add_post(new Postagem(4,"foo bar", 0));
console.log(microblog);
microblog.curtir_post(2);
console.log(microblog);
console.log(microblog.hot_post());
console.log("----------------------");
console.log(microblog.toString());