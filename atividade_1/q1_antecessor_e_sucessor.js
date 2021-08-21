//1. Escreva um programa que possua uma variável com um número inteiro e mostre seu antecessor e sucessor.
const input = require('prompt-sync')()
function main(){
    let numero = Number(input('Digite um número: '));
    console.log('Antecessor: ', numero - 1);
    console.log('Sucessor  : ', numero + 1);
}
main()