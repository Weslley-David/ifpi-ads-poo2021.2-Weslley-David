/*9. Construir um programa que leia uma string s, e dois caracteres a e b. Em seguida, o
programa deve substituir todas as ocorrências do caractere a na string s pelo caractere
b.*/
const input = require('prompt-sync')()
function main(){
    //entrada
    let i = 0;
    let s_2 = "";
    let s = input('Digite uma palavra                  : ');
    let a = input('Digite uma letra a substituir       : ');
    let b = input('Digite uma letra a ser substituida  : ');

    //processamento
    while(s.length > i){
        if(s[i] == a){
            s_2 = s_2 + b;
        }else{
            s_2 = s_2 + s[i];
        }
        i++;
    }

    //saída
    console.log(s_2);
}
main()