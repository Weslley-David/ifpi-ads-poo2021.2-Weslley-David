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
