/*6. Escreva um programa que leia uma sequência de números inteiros terminada por –1 e
imprima na tela a soma e a média aritmética destes números. Obs: o valor –1 é
somente um terminador e não deve ser considerado nos cálculos.*/
const input = require('prompt-sync')()
function main(){
    let media = 0, soma = 0, i = 0;
    while( true ) {
        let num = Number(input('Digite um valor : '));
        if(num == -1){
            media = soma/i
            console.log('Soma dos números : ',soma);
            console.log('Média dos números: ',media);
            break;
        }
        soma = soma + num; 
        i++;
    }
}
main()