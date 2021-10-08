/*
1. Qual a diferença entre objetos e classes? Exemplifique.
    Classe, trata-se do molde ao qual se formam os objetos, que por sua vez 
    representam o uso efetivo sobre os determinados moldes durante a execu-
    ção de um programa.
    Ex: planta(classe) e casa(objeto).

2. De forma breve, conceitue atributos e métodos. Pesquise e exemplifique um
exemplo de objeto que possua atributos e métodos (notação livre).
    Atributo-- conceitua-se como as características de um objeto.
    Métodos -- tratam-se das ações que agem sobre os atributos de 
    um objeto, manipulando-as de acordo com necessidade do programa.

    Ex:
        Em determinado sistema de trânsito, pode-se tratar um carro como uma classe,
        por sua vez, atributos como placa, cor, proprietário e modelo são essenciais.
        Ao passo que os atributos já  foram definidos, pode-se implementar métodos 
        como consulta de legalidade, transferência de posse ou alteração de características
        do veículo.

3. A abstração visa focar no que é importante para um sistema. Você concorda que
um atributo de uma pessoa pode ser importante ou não dependendo do contexto
do sistema. Enumere na tabela abaixo contextos/sistemas distintos em que os
atributos abaixo seriam ou não relevantes:

Atributo                ..... Sistema em que é importante   ..... Sistema em que não é importante
Peso                    |   App de saúde.                   |   Sistema de trânsito.
Tipo de CNH             |   Sistema de trânsito.            |   App de saúde.
Tipo Sanguíneo          |   Sistema hospitalar.             |   Aplicação bancária.
Habilidade destra       |   Sistema de concursos.           |   App de comunicação.
Percentual de gordura   |   App de saúde.                   |   Sistema de trânsito.
Saldo em conta          |   Aplicação bancária              |   App de saúde.
Etinia                  |   Sistema de bolsas.              |   Aplicação de streaming.

4. Considerando os objetos Pessoa e Conta:
a. Seria interessante em um sistema bancário um objeto "conta" possuir uma
"pessoa" como um atributo interno representando o titular da conta?
    Sim.

b. Olhando no sentido inverso, seria interessante uma pessoa possuir mais de
uma conta como atributo? Que elemento da programação estruturada melhor
representaria o conjunto de contas de uma pessoa?
    Sim, podendo ser representado através de um vetor de structs.

5. Identifique pelo menos 5 objetos de um sistema de controle acadêmico. Ex: aluno.
    Matéria, Professor, Sala, Aluno, Avaliações.

6. Imagine um jogo qualquer. Identifique o máximo de objetos possíveis e eventuais
características (atributos) e comportamentos (métodos) que os mesmos poderiam
ter.
    JOGO: Space Invaders.

    Objeto    : Nave_principal
    Atriburos : vida: number; localizacao : number; dano: number;
    Métodos   : ataque(dano: number), movimentar(localizacao: number), dano_recebido(dano_sofrido: number);

    Objeto    : Inimigo
    Atriburos : vida: number; localizacao : number; dano: number;
    Métodos   : ataque(dano: number), movimentar(localizacao: number), dano_recebido(dano_sofrido: number);

7. Considerando o exemplo da classe Retangulo dos slides, implemente um método
adicional chamado que calcule o perímetro do retângulo e altere a classe
TestaRetangulo para exibir o cálculo do perímetro.
*/
class Retangulo {
    l1:number;
    l2:number;
    calcula_area(): number{
        return this.l1 * this.l2;
    }
    calcula_perimetro(): number{
        return 2 * this.l1 + 2 * this.l2;
    }
}
let retangulo : Retangulo;
    retangulo = new Retangulo();
    retangulo.l1 = 10;
    retangulo.l2 = 20;

    console.log(retangulo.calcula_area());
    console.log(retangulo.calcula_perimetro());
/*
8. Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que
calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor
ao raio e exiba a área e o perímetro chamando os dois métodos definidos.*/
class Circulo {
    raio: number;
    calcula_area_circulo(): number{
        return 3.14 * (this.raio * this.raio);
    }
    calcula_perimetro_circulo(): number{
        return 2 * 3.14 * this.raio;
    }
}
let circulo : Circulo;
    circulo = new Circulo();
    circulo.raio = 3;

    console.log(circulo.calcula_area_circulo());
    console.log(circulo.calcula_perimetro_circulo());
/*
9. Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
valorDebitos. Crie um método chamado saldo() que retorna/calcula a diferença
entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize os dois
atributos e exiba o resultado do método saldo().*/
class SituacaoFinanceira {
    valorCreditos: number;
    valorDebitos: number;
    saldo(): number{
        return this.valorCreditos - this.valorDebitos;
    }
}
let pessoa_1 : SituacaoFinanceira;
    pessoa_1 = new SituacaoFinanceira();
    pessoa_1.valorCreditos = 10;
    pessoa_1.valorDebitos = 20;

    console.log(pessoa_1.saldo());