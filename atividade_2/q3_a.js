var Estado;
(function (Estado) {
    Estado[Estado["PI"] = 0] = "PI";
    Estado[Estado["CE"] = 1] = "CE";
    Estado[Estado["MA"] = 2] = "MA";
})(Estado || (Estado = {}));
;
for (var index = 0; index < 3; index++) {
    console.log(Estado[index]);
}
