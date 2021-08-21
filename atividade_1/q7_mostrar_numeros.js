//7. Escreva um programa que leia um vetor de 5 posições e apresente-o na tela.
const input = require('prompt-sync')()
function main(){
    let vetor = new Array(5)
    let i = 0;
    while( i <= 4) {
        vetor[i] = Number(input('Digite um valor : '));
        i++
    }
    i = 0;
    while( i <= 4) {
        console.log(vetor[i]);
        i++
    }
}
main()