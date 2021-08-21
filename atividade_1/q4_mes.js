//4. Escreva um programa que apresente o mês por extenso, a partir de um número digitado pelo usuário (entre 1 e 12).
const input = require('prompt-sync')()
function main() {
    const mes = Number(input('Digite um mês (em formato numérico) : '));
    switch (mes){
        case 1:
            console.log('Janeiro');
        break;
        case 2:
            console.log('Fevereiro');
        break;
        case 3:
            console.log('Março');
        break;
        case 4:
            console.log('Abril');
        break;
        case 5:
            console.log('Maio');
        break;
        case 6:
            console.log('Junho');
        break;
        case 7:
            console.log('Julho');
        break;
        case 8:
            console.log('Agosto');
        break;
        case 9:
            console.log('Setembro');
        break;
        case 10:
            console.log('Outubro');
        break;
        case 11:
            console.log('Novembro');
        break;
        case 12:
            console.log('Dezembro');
        break;
    }
}
main()