//2. Escreva um programa para converter de dólar para real e exibir para o usuário a resposta final.
const input = require('prompt-sync')()
function main(){
    const cota = Number(input('Digite a cotação do dólar: '));
    const valor_dolar = Number(input('Digite quanto em dólar deseja converter: '));
    const valor_real = valor_dolar * cota;
    console.log(`quantidade em real: ${valor_real}`);
}
main()