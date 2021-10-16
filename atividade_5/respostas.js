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
var Hotel = /** @class */ (function () {
    function Hotel(quantReservas) {
        this.quantReservas = quantReservas;
    }
    Hotel.prototype.adicionarReserva = function () {
        this.quantReservas++;
        console.log(this.quantReservas);
    };
    return Hotel;
}());
var hotel = new Hotel(2);
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
var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontos) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }
    Jogador.prototype.calcular_ataque = function () {
        return (this.forca * this.nivel);
    };
    Jogador.prototype.atacado = function (player) {
        this.pontos = this.pontos - (player.nivel * player.forca);
    };
    return Jogador;
}());
var player_1 = new Jogador(7, 2, 100);
var player_2 = new Jogador(7, 3, 140);
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
var Conta = /** @class */ (function () {
    function Conta(num, saldoInicial) {
        this.numero = num;
        this.saldo = saldoInicial;
    }
    Conta.prototype.sacar = function (valor) {
        if (this.saldo - valor < 0) {
            return false;
        }
        this.saldo = this.saldo - valor;
        return true;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        var status = this.sacar(valor);
        if (status == true) {
            contaDestino.depositar(valor);
        }
    };
    return Conta;
}());
var c1 = new Conta("1", 100);
var c2 = new Conta("2", 200);
//testes
console.log(c1.sacar(110));
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
c2.transferir(c1, 200);
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
var Produto = /** @class */ (function () {
    function Produto(cod, desc, val, quant, quant_min) {
        this.codigo = cod;
        this.descricao = desc;
        this.valor = val;
        this.quantidade = quant;
        this.quantidade_minima = quant_min;
    }
    Produto.prototype.baixar = function (quantidade) {
        if (this.quantidade - quantidade < this.quantidade_minima) {
            return false;
        }
        this.quantidade = this.quantidade - quantidade;
    };
    Produto.prototype.repor = function (quantidade) {
        this.quantidade = this.quantidade + quantidade;
    };
    Produto.prototype.reajusta = function (taxa) {
        this.valor = this.valor + (this.valor * taxa / 100);
    };
    Produto.prototype.to_string = function () {
        console.log("\n    codigo           : " + this.codigo + "\n    descricao        : " + this.descricao + "\n    valor            : " + this.valor + "\n    quantidade       : " + this.quantidade + "\n    quantidade_minima: " + this.quantidade_minima + "\n    ");
    };
    Produto.prototype.equals = function (produto) {
        if (this.codigo == produto.codigo) {
            return true;
        }
        else {
            return false;
        }
    };
    return Produto;
}());
var power_bank_pirata = new Produto(1, "power_bank", 50, 300, 30);
var power_bank_original = new Produto(2, "power_bank", 50, 100, 20);
//testes
power_bank_pirata.baixar(270);
console.log(power_bank_pirata.quantidade);
power_bank_pirata.reajusta(100);
console.log(power_bank_pirata.valor);
power_bank_pirata.to_string();
console.log(power_bank_pirata.equals(power_bank_original));
