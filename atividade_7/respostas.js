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
var triangulo = /** @class */ (function () {
    function triangulo(l1, l2, l3) {
        this.a = l1;
        this.b = l2;
        this.c = l3;
    }
    triangulo.prototype.valida_triangulo = function () {
        return ((Math.abs(this.b - this.c) < this.a) && (this.a < this.b + this.c));
    };
    triangulo.prototype.ehIsoceles = function () {
        if (this.valida_triangulo) {
            if (this.ehEquilatero()) {
                return false;
            }
            else {
                return (this.a == this.b || this.a == this.c || this.b == this.c);
            }
        }
        else {
            return false;
        }
    };
    triangulo.prototype.ehEquilatero = function () {
        if (this.valida_triangulo) {
            return ((this.a == this.b) && (this.a == this.c) && (this.b == this.c));
        }
        else {
            console.log("retorno");
            return false;
        }
    };
    triangulo.prototype.ehEscaleno = function () {
        if (this.valida_triangulo) {
            return (this.a != this.b && this.a != this.c && this.b != this.c);
        }
        else {
            return false;
        }
    };
    return triangulo;
}());
var triangulo1 = new triangulo(3, 3, 3);
var triangulo2 = new triangulo(3, 5, 5);
var triangulo3 = new triangulo(3, 5, 100);
var triangulo4 = new triangulo(3, 5, 4);
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
var Conta = /** @class */ (function () {
    function Conta(numero, saldoinicial) {
        this.numero = numero;
        this.saldo = saldoinicial;
    }
    Conta.prototype.sacar = function (valor) {
        this.saldo = this.saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    return Conta;
}());
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (c) {
        if (this.consultarIndice(c.numero) == -1) {
            this.contas.push(c);
        }
        else {
            console.log("parâmetros já existentes.");
        }
    };
    Banco.prototype.consultar = function (numero) {
        var contaProcurada;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    };
    Banco.prototype.consultarIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Banco.prototype.alterar = function (c) {
        var indice = this.consultarIndice(c.numero);
        if (indice != -1) {
            this.contas[indice] = c;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarIndice(numero);
        if (indice != -1) {
            for (var i = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    };
    Banco.prototype.sacar = function (numero, valor) {
        var conta = this.consultarIndice(numero);
        if (this.consultarIndice(numero) != -1) {
            this.contas[conta].saldo = this.contas[conta].saldo - valor;
        }
        else {
            console.log("conta não encontrada.");
        }
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        var numeroCredito_adress = this.consultarIndice(numeroCredito);
        var numeroDebito_adress2 = this.consultarIndice(numeroCredito);
        if (numeroCredito_adress < 0 || numeroDebito_adress2 < 0) {
            console.log('Erro, uma das contas não foi encontrada.');
        }
        else {
            banco.sacar(numeroDebito, valor);
            banco.contas[numeroDebito_adress2].saldo = this.contas[numeroDebito_adress2].saldo + valor;
        }
    };
    Banco.prototype.quant_contas = function () {
        return banco.contas.length;
    };
    Banco.prototype.quant_dinheiro = function () {
        var total = 0;
        for (var i = 0; i < this.contas.length; i++) {
            total = total + this.contas[i].saldo;
            /*if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }*/
        }
        return total;
    };
    Banco.prototype.media_bank = function () {
        var contas = this.quant_contas();
        var dinheiro = this.quant_dinheiro();
        return dinheiro / contas;
    };
    return Banco;
}());
//let contas: Conta[] = [];
var banco = new Banco();
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
var Postagem = /** @class */ (function () {
    function Postagem(id, texto, like) {
        this.id = id;
        this.texto = texto;
        this.like = like;
    }
    Postagem.prototype.curtir = function () {
        this.like++;
    };
    Postagem.prototype.toString = function () {
        return (this.texto + " - " + this.like);
    };
    return Postagem;
}());
var Microblog = /** @class */ (function () {
    function Microblog() {
        this.postagens = [];
    }
    Microblog.prototype.add_post = function (post) {
        this.postagens.push(post);
    };
    Microblog.prototype.consultarIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Microblog.prototype.excluir = function (numero) {
        var indice = this.consultarIndice(numero);
        if (indice != -1) {
            for (var i = indice; i < this.postagens.length; i++) {
                this.postagens[i] = this.postagens[i + 1];
            }
            this.postagens.pop();
        }
    };
    Microblog.prototype.hot_post = function () {
        var most_liked = 0;
        var post_liked = null;
        for (var i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].like > most_liked) {
                most_liked = this.postagens[i].like;
                post_liked = this.postagens[i];
            }
        }
        return post_liked;
    };
    Microblog.prototype.curtir_post = function (post) {
        var encontrou = this.consultarIndice(post);
        if (encontrou != -1) {
            this.postagens[encontrou].curtir();
        }
        else {
            console.log("post não encontrado");
        }
    };
    Microblog.prototype.toString = function () {
        for (var i = 0; i < this.postagens.length; i++) {
            console.log(this.postagens[i].toString());
        }
    };
    return Microblog;
}());
var microblog = new Microblog();
microblog.add_post(new Postagem(1, "hello world", 1));
microblog.add_post(new Postagem(2, "ola mundo", 33));
microblog.add_post(new Postagem(3, "cubo esfera", 45));
microblog.add_post(new Postagem(4, "foo bar", 0));
console.log(microblog);
microblog.curtir_post(2);
console.log(microblog);
console.log(microblog.hot_post());
console.log("----------------------");
console.log(microblog.toString());
