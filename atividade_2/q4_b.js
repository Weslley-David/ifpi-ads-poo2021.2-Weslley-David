var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["segunda"] = 0] = "segunda";
    DiasSemana[DiasSemana["terca"] = 1] = "terca";
    DiasSemana[DiasSemana["quarta"] = 2] = "quarta";
    DiasSemana[DiasSemana["quinta"] = 3] = "quinta";
    DiasSemana[DiasSemana["sexta"] = 4] = "sexta";
    DiasSemana[DiasSemana["sabado"] = 5] = "sabado";
    DiasSemana[DiasSemana["domingo"] = 6] = "domingo";
})(DiasSemana || (DiasSemana = {}));
;
var Dias_Semana;
(function (Dias_Semana) {
    function isDiaUtil(DiasSemanas) {
        if (dia == DiasSemana.domingo || dia == DiasSemana.sabado) {
            return false;
        }
        else {
            return true;
        }
    }
    Dias_Semana.isDiaUtil = isDiaUtil;
})(Dias_Semana || (Dias_Semana = {}));
var dia;
