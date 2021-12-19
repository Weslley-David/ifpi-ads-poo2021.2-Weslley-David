var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
1. As classes Carro, Veiculo e CarroEletrico são bem semelhantes. Refatore as
classes para que os atributos duplicados não sejam mais necessários.
*/
var Veiculo = /** @class */ (function () {
    function Veiculo() {
    }
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Carro;
}(Veiculo));
var CarroEletrico = /** @class */ (function (_super) {
    __extends(CarroEletrico, _super);
    function CarroEletrico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarroEletrico;
}(Carro));
/*
2. Crie uma classe Calculadora com:
a. Dois tributos privados chamados _op1 e _op2;
b. Crie um construtor que inicializa os atributos;
c. Crie um método chamado adicionar que retorna a soma dos dois atributos;
d. Teste a classe.
*/
var Calculadora = /** @class */ (function () {
    function Calculadora(n_1, n_2) {
        this._op1 = n_1;
        this._op2 = n_2;
    }
    Calculadora.prototype.somar = function () {
        return this._op1 + this._op2;
    };
    return Calculadora;
}());
var operacao = new Calculadora(2, 3);
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
var CalculadoraCientifica = /** @class */ (function (_super) {
    __extends(CalculadoraCientifica, _super);
    function CalculadoraCientifica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculadoraCientifica.prototype.exponenciar = function () {
        return Math.pow(this._op1, this._op2);
    };
    return CalculadoraCientifica;
}(Calculadora));
var operacao_cientifica = new CalculadoraCientifica(3, 3);
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
var Poupanca = /** @class */ (function (_super) {
    __extends(Poupanca, _super);
    function Poupanca(numero, saldo, taxaJuros) {
        var _this = _super.call(this, numero, saldo) || this;
        _this._taxaJuros = taxaJuros;
        return _this;
    }
    Poupanca.prototype.renderJuros = function () {
        this.depositar(this.saldo * this._taxaJuros / 100);
    };
    Object.defineProperty(Poupanca.prototype, "taxaJuros", {
        get: function () {
            return this._taxaJuros;
        },
        enumerable: false,
        configurable: true
    });
    return Poupanca;
}(Conta));
var Banco = /** @class */ (function () {
    function Banco() {
        this._contas = [];
    }
    Banco.prototype.inserir = function (c) {
        var contaConsultada = this.consultar(c.numero);
        if (contaConsultada == null) {
            this._contas.push(c);
        }
    };
    Banco.prototype.consultar = function (numero) {
        var contaProcurada;
        for (var _i = 0, _a = this._contas; _i < _a.length; _i++) {
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
        for (var i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Banco.prototype.alterar = function (c) {
        var indice = this.consultarIndice(c.numero);
        if (indice != -1) {
            this._contas[indice] = c;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarIndice(numero);
        if (indice != -1) {
            for (var i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var contaConsultada = this.consultar(numero);
        if (contaConsultada != null) {
            contaConsultada.depositar(valor);
        }
    };
    Banco.prototype.sacar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta != null) {
            conta.sacar(valor);
        }
        else {
            console.log("conta não encontrada.");
        }
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        var numeroCredito_adress = this.consultar(numeroCredito);
        var numeroDebito_adress2 = this.consultar(numeroCredito);
        if (numeroCredito_adress != null || numeroDebito_adress2 != null) {
            numeroDebito_adress2.transferir(numeroCredito_adress, valor);
        }
    };
    Banco.prototype.quant_contas = function () {
        return banco._contas.length;
    };
    Banco.prototype.quant_dinheiro = function () {
        var total = 0;
        for (var i = 0; i < this._contas.length; i++) {
            total = total + this._contas[i].saldo;
        }
        return total;
    };
    Banco.prototype.media_bank = function () {
        var contas = this.quant_contas();
        var dinheiro = this.quant_dinheiro();
        return dinheiro / contas;
    };
    Banco.prototype.renderJuros = function (numero) {
        var contaConsultada = this.consultar(numero);
        if (contaConsultada instanceof Poupanca) {
            var poupanca = contaConsultada;
            poupanca.renderJuros();
        }
    };
    return Banco;
}());
var banco = new Banco();
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
var hoje = '20211220'; //yyyymmdd
var Produto = /** @class */ (function () {
    function Produto(id, descricao, quantidade, valor) {
        this._id = id;
        this._descricao = descricao;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    Produto.prototype.repor = function (quantidade_param) {
        this._quantidade = this._quantidade + quantidade_param;
    };
    Produto.prototype.dar_baixa = function (quantidade_param) {
        this._quantidade = this._quantidade - quantidade_param;
    };
    Object.defineProperty(Produto.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "descricao", {
        get: function () {
            return this._descricao;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
var ProdutoPerecivel = /** @class */ (function (_super) {
    __extends(ProdutoPerecivel, _super);
    function ProdutoPerecivel(id, descricao, quantidade, valor, validade) {
        var _this = _super.call(this, id, descricao, quantidade, valor) || this;
        _this._dataValidade = validade;
        return _this;
    }
    ProdutoPerecivel.prototype.valido = function () {
        if (parseInt(this._dataValidade) < parseInt(hoje)) {
            return 'vencido';
        }
    };
    return ProdutoPerecivel;
}(Produto));
var Estoque = /** @class */ (function () {
    function Estoque() {
        this._produtos = [];
    }
    Estoque.prototype.inserir = function (p) {
        var contaConsultada = this.consultar(p.id, p.descricao);
        if (contaConsultada == null) {
            this._produtos.push(p);
        }
    };
    Estoque.prototype.consultar = function (numero, nome) {
        var produtoProcurado;
        for (var _i = 0, _a = this._produtos; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.id == numero || p.descricao == nome) {
                produtoProcurado = p;
                break;
            }
        }
        return produtoProcurado;
    };
    Estoque.prototype.consultarIndice = function (id) {
        var indice = -1;
        for (var i = 0; i < this._produtos.length; i++) {
            if (this._produtos[i].id == id) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Estoque.prototype.excluir = function (numero) {
        var indice = this.consultarIndice(numero);
        if (indice != -1) {
            for (var i = indice; i < this._produtos.length; i++) {
                this._produtos[i] = this._produtos[i + 1];
            }
            this._produtos.pop();
        }
    };
    Estoque.prototype.repor = function (id, nome, quant) {
        var contaConsultada = this.consultar(id, nome);
        if (contaConsultada instanceof Produto) {
            var poupanca = contaConsultada;
            poupanca.repor(quant);
        }
    };
    Estoque.prototype.dar_baixa = function (id, nome, quant) {
        var contaConsultada = this.consultar(id, nome);
        if (contaConsultada instanceof Produto) {
            var poupanca = contaConsultada;
            poupanca.dar_baixa(quant);
        }
    };
    Estoque.prototype.lst_vencido = function () {
        for (var i = 0; i < this._produtos.length; i++) {
            if (this._produtos[i] instanceof ProdutoPerecivel) {
                // temp = this._produtos[i];
            }
        }
    };
    return Estoque;
}());
//testes
var estoque = new Estoque();
console.log(estoque);
estoque.inserir(new Produto("1", "biscoito salgado", 90, 25));
estoque.inserir(new ProdutoPerecivel("2", "biscoito doce", 90, 25, "20220303")); //yyyymmdd
estoque.inserir(new ProdutoPerecivel("3", "biscoito doce", 90, 25, "20190303"));
estoque.inserir(new ProdutoPerecivel("3", "biscoito recheado", 90, 25, "20220303"));
console.log(estoque);
estoque.excluir("1");
estoque.repor("2", "biscoito doce", 90);
estoque.dar_baixa("3", "biscoito recheado", 90);
console.log(estoque);
//faltou a letra "F".
