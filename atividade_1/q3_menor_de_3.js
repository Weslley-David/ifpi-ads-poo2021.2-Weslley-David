//3. Escrever um programa que leia três valores inteiros e apresente o menor dos valores lidos
const input = require('prompt-sync')()
function main(){
    const valor_1 = Number(input('Digite um valor : '));
    const valor_2 = Number(input('Digite mais um  : '));
    const valor_3 = Number(input('Digite um último: '));
    let res_comparativo;
    if(valor_1 < valor_2){
        res_comparativo = valor_1;
    }else{
        res_comparativo = valor_2;
    }
    if(res_comparativo < valor_3){
        console.log(`O menor valor entre os valores é ${res_comparativo}`);
    }else{
        console.log(`O menor valor entre os valores é ${valor_3}`);
    }
}
main()