//5. Escreva um programa que imprima os números inteiros de 1 a 100.
const input = require('prompt-sync')()
function main(){
    for (let index = 1; index <= 100; index++) {
        console.log(index);
    }
}
main()