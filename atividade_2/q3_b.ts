//Os indices foram imprimidos com sucesso.
enum Estado {PI, CE, MA};
let indice : string;
 
for (let index = 0; index < 3; index++) {
    indice = "Estado." + Estado[index];
    console.log(eval(indice))
}