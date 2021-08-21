/*13. Escreva uma função que dados um inteiro n e um inteiro d, onde 0 < d ≤ 9, devolve
quantas vezes o dígito d aparece no número n. Por exemplo: se n = 7677 e d = 7, a
função deve retornar 3.*/
const input = require('prompt-sync')()
function timer_conversor(numero, verificador) {
    i = 0;
    ocorrencia = 0;
    while(numero.length > i){
        if(numero[i] == verificador){
            ocorrencia = ocorrencia + 1;
        }
        i++;
    }
    return ocorrencia;
}
function main(){
    const numero = input('Numero: ');
    const verificador = input('Verificador: ');
    n_vezes = timer_conversor(numero, verificador);
    console.log("Número de ocorrência do algarismo: ", n_vezes);
}
main()