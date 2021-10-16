/* 1. Suponha uma classe Hotel que sirva apenas para guardar a quantidade de
    solicitações de reservas feitas conforme abaixo:
    *código*
    Podemos afirmar que haverá um problema de compilação, pois a variável inteira não
    foi inicializada previamente? Justifique.
        Sim, quantReservas++ equivale a: quantReservas = quantReservas + 1. Apesar de alocado, o espaço em 
    memória permanece sem valor equivalente, logo, não é possível efetuar uma soma.

    2. Ainda sobre a classe do exemplo anterior, considere o método main abaixo:
    let hotel : Hotel = new Hotel(2);
    console.log(hotel.quantReservas);
    Adicione o construtor que aceite um parâmetro inteiro e faça a inicialização do atributo
    quantReservas.    
*/
class Hotel {
    quantReservas : number;
    adicionarReserva() : void {
        this.quantReservas++;
        console.log(this.quantReservas);
    }
    constructor(quantReservas : number) {
        this.quantReservas = quantReservas;
    }
}
let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);
/*3. Considere a classe Radio e as instruções fazem seu uso abaixo::
    class Radio {
    volume : number;
    constructor(volume : number) {
    this.volume = volume;
    }
    }
    let r : Radio = new Radio();
    r.volume = 10;
    Justifique o erro de compilação e proponha uma solução.
        Esperava-se um argumento para o construtor do objeto Radio, podendo ser resolvido
        com a atribuição de um valor inteiro em sua declaração como:
        let r : Radio = new Radio(10);
        por sua vez, tornando a atribuição seguinte: r.volume = 10; desnecessária.

4. Considerando o uso da classe Conta apresentada em aula e seu uso abaixo:
    let c1 : Conta = new Conta("1",100);
    let c2 : Conta = new Conta("2",100);
    c1 = c2;
    c1.sacar(10);
    c1.tranferir(c2,50);

    console.log(c1.saldo);
    console.log(c2.saldo);
    a. Qual o resultado dos dois "prints"? Justifique sua resposta.
        Ambos apresentam o mesmo saldo.
    b. O que acontece com o objeto para o qual a referência c1 aponta?
        Torna-se c2.

5. Crie uma classe chamada Jogador e nela:
    a. Crie 3 atributos inteiros representando força, nível e pontos atuais;
    b. Crie um construtor no qual os 3 parâmetros são passados e inicialize os
    respectivos atributos;
    c. Crie um método que calcule os pontos relativos a um ataque que são
    calculados pela multiplicação de força pelo nível;
    d. Crie um método chamado atacar em que é passado um outro jogador como
    parâmetro e é feita a subtração de pontos de tal jogador baseado na
    quantidade de pontos do jogador atual (“this”).
    e. Avalie em com testes dois jogadores instanciados e inicializados através do
    construtor. Utilize o método de ataque de cada jogador e ao final, verifique
    qual jogador tem mais pontos.
    */
    class Jogador {
        forca: number;
        nivel: number;
        pontos: number;
    
        constructor(forca: number, nivel: number, pontos: number){
            this.forca = forca;
            this.nivel = nivel;
            this.pontos = pontos;
        }
        calcular_ataque(){
            return(this.forca * this.nivel);
        }
        atacado(player: Jogador){
            this.pontos = this.pontos - (player.nivel * player.forca);
        }
    }
    
    let player_1 : Jogador = new Jogador(7,2,100);
    let player_2 : Jogador = new Jogador(7,3,140);
    //testes : )
    console.log(player_1.pontos);
    player_1.atacado(player_2);
    console.log(player_1.pontos);
    player_1.atacado(player_2);
    console.log(player_1.pontos);
    player_2.atacado(player_1);
    console.log(player_2.pontos);

/*6. Altere a classe conta dos slides conforme as instruções abaixo:
    a. Altere o método sacar de forma que ele retorne verdadeiro ou falso. Caso o
    saque deixe saldo negativo, o mesmo não será realizado, retornando falso;
    b. Altere o método transferir() para que o mesmo use os métodos sacar() e
    depositar(). Visto pelo prisma da "proteção do saldo", chamar outros
    métodos em vez de acessar o saldo diretamente é mais seguro?
    c. Altere o método transferir() para que retorne também um valor lógico e que
    não seja feita a transferência caso o sacar() na conta origem não seja
    satisfeito;
    d. Verifique as diferentes operações implementadas.
*/    
    class Conta {
        numero: String;
        saldo: number;

        constructor(num:String,saldoInicial:number){
            this.numero = num;
            this.saldo = saldoInicial;
            }

        sacar(valor: number): boolean {
            if(this.saldo - valor < 0){
                return false;
            }
                this.saldo = this.saldo - valor;
                return true;
            }

        depositar(valor: number): void {
            this.saldo = this.saldo + valor;
            }

        consultarSaldo(): number {
            return this.saldo;
            }
        transferir(contaDestino: Conta, valor: number): void {
            let status: boolean = this.sacar(valor);
            if(status == true){
                contaDestino.depositar(valor);
            }
            }
        }
        let c1 : Conta = new Conta("1",100);
        let c2 : Conta = new Conta("2", 200);
        //testes
        console.log(c1.sacar(110));
        console.log(c1.consultarSaldo());
        console.log(c2.consultarSaldo());
        c2.transferir(c1,200);
        console.log(c1.consultarSaldo());
        console.log(c2.consultarSaldo());

/*
7. Crie uma classe chamada Produto e nela:
    a. Crie os atributos codigo, descricao, valor e um construtor que os inicialize;
    b. Crie os métodos baixar(quantidade : number) e repor(quantidade : number)
    que reduzem e incrementam a quantidade disponível do produto;
    c. Crie um atributo quantidadeMinima e reescreva o método baixar para que
    não seja possível realizar a baixa caso a operação deixe a quantidade
    abaixo da quantidade mínima;
    d. Crie um método da classe Produto chamado reajusta(taxa : number) que
    reajusta em x% o valor do produto.
    e. Crie um método chamado toString() que retorna a representação textual do
    produto concatenando todos os atributos.
    f. Crie um método equals(Produto produto) que retorna true ou false se o
    produto passado como parâmetro possui o mesmo código;
    g. Verifique as diferentes operações implementadas com testes.
*/
class Produto{
    codigo: number;
    descricao: string;
    valor: number;
    quantidade: number;
    quantidade_minima: number;
    constructor(cod: number, desc: string, val:number, quant: number, quant_min: number){
        this.codigo = cod;
        this.descricao = desc;
        this.valor = val;
        this.quantidade = quant;
        this.quantidade_minima = quant_min;
        }
    baixar(quantidade: number){
        if(this.quantidade - quantidade < this.quantidade_minima){
            return false;
        }
        this.quantidade = this.quantidade - quantidade;
    }
    repor(quantidade: number){
        this.quantidade = this.quantidade + quantidade;
    }
    reajusta(taxa : number){
        this.valor = this.valor + (this.valor * taxa/100);
    }
    to_string(){
    console.log(`
    codigo           : ${this.codigo}
    descricao        : ${this.descricao}
    valor            : ${this.valor}
    quantidade       : ${this.quantidade}
    quantidade_minima: ${this.quantidade_minima}
    `);
    }
    equals(produto: Produto){
        if(this.codigo == produto.codigo){
            return true;
        }else{
            return false;
        }
    }
}

let power_bank_pirata   : Produto = new Produto(1, "power_bank", 50, 300, 30);
let power_bank_original : Produto = new Produto(2, "power_bank", 50, 100, 20);
//testes
power_bank_pirata.baixar(270);
console.log(power_bank_pirata.quantidade);
power_bank_pirata.reajusta(100);
console.log(power_bank_pirata.valor);
power_bank_pirata.to_string()
console.log(power_bank_pirata.equals(power_bank_original));