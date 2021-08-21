const input = require('prompt-sync')()
function calculo(num, por) {
    let por_resultante;
    por_resultante = num * por/100;
    return por_resultante;
}
function main(){
    const numero = Number(input('Digite um valor : '));
    const porcentagem = Number(input('Digite a porcentagem que deseja saber: '));
    result = calculo(numero, porcentagem);
    console.log(result);
}
main()