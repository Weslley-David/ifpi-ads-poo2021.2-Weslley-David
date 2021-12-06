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
var Calculadora = /** @class */ (function () {
    function Calculadora(n_1, n_2) {
        this._operado_1 = n_1;
        this._operado_2 = n_2;
    }
    Calculadora.prototype.somar = function () {
        return this._operado_1 + this._operado_2;
    };
    Calculadora.prototype.multiplicar = function () {
        return this._operado_1 * this._operado_2;
    };
    return Calculadora;
}());
var calc = new Calculadora(4, 3);
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
var Hora = /** @class */ (function () {
    function Hora(hh, mm, ss) {
        this._hora = hh;
        this._minuto = mm;
        this._segundo = ss;
    }
    Hora.prototype.hora = function () {
        return this._hora;
    };
    Hora.prototype.minuto = function () {
        return this._minuto;
    };
    Hora.prototype.segundo = function () {
        return this._segundo;
    };
    Hora.prototype.complete_timer = function () {
        return this._hora + " : " + this._minuto + " : " + this._segundo;
    };
    return Hora;
}());
var horas = new Hora(2, 3, 4);
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
var Conta = /** @class */ (function () {
    function Conta(numero, saldoinicial) {
        this._numero = numero;
        this._saldo = saldoinicial;
    }
    Conta.prototype.sacar = function (valor) {
        this._saldo = this._saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this._saldo = this._saldo + valor;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        enumerable: false,
        configurable: true
    });
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
            this.contas[conta].sacar(valor);
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
            banco.contas[numeroDebito_adress2].depositar(valor);
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
    Banco.prototype.depositar = function () {
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
console.log(banco);
banco.sacar("4", 25);
banco.transferir("2", "4", 70);
console.log(banco);
console.log("fim");
