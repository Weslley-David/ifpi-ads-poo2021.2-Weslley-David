/*8. Escreva um programa que leia e mostre um vetor de 20 elementos inteiros. A seguir, conte
quantos valores pares existem no vetor.*/
const input = require('prompt-sync')()
function main(){
    let vetor = new Array(20)
    let i = 0, par_cont = 0;
    while( i <= 19) {
        vetor[i] = Number(input('Numero : '));
        i++
    }
    i = 0;
    while( i <= 19) {
        if(vetor[i]%2 == 0){
            par_cont = par_cont + 1;
        }
        i++
    }
    console.log('Quantidade de pares: ', par_cont);
}
main()