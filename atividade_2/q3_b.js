//Os indices foram imprimidos com sucesso.
var Estado;
(function (Estado) {
    Estado[Estado["PI"] = 0] = "PI";
    Estado[Estado["CE"] = 1] = "CE";
    Estado[Estado["MA"] = 2] = "MA";
})(Estado || (Estado = {}));
;
var indice;
for (var index = 0; index < 3; index++) {
    indice = "Estado." + Estado[index];
    console.log(eval(indice));
}
