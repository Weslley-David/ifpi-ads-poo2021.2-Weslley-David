/*12. Faça uma função que recebe por parâmetro uma medida de tempo expressa em
segundos e retorna, também por parâmetro, esse tempo em horas, minutos e
segundos no formato: “hh:mm:ss”.*/
const input = require('prompt-sync')()
function timer_conversor(sec) {
    hor = Math.floor((sec/60)/60);
    sec = sec - 3600*hor;
    min = Math.floor(sec/60);
    sec = sec - 60*min;
        format = hor + ":" + min + ":" + sec
    return format

}
function main(){
    const segundos = Number(input('Segundos: '));
    result = timer_conversor(segundos);
    console.log(result);
}
main()