enum DiasSemana {segunda , terca, quarta, quinta, sexta, sabado, domingo};
namespace Dias_Semana{
    export function isDiaUtil(DiasSemanas : number): boolean{
        if(dia == DiasSemana.domingo || dia == DiasSemana.sabado){
            return false;
        }else{
            return true;
        }
    }
}
let dia : number;
