/*10. Escreva um programa que leia um texto pelo teclado e remova todas as suas vogais.
Exiba a string resultante.*/
const input = require('prompt-sync')()
function main(){
    //entrada
    let i = 0;
    let frase_2 = "";
    let frase = input('Digite uma frase: ');

    //processamento
    while(frase.length > i){
        if(frase[i] != 'a' && frase[i] != 'e' && frase[i] != 'i' && frase[i] != 'o' && frase[i] != 'u' && frase[i] != 'A' && frase[i] != 'E' && frase[i] != 'I' && frase[i] != 'O' && frase[i] != 'U'){
            frase_2 = frase_2 + frase[i];
        }
        i++;
    }

    //saída
    console.log(frase_2);
}
main()