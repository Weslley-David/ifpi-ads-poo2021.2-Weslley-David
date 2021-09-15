const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let resultado: number[];
console.log(array);
let par = (x) =>{
    return x%2 == 0;
}

resultado = array.filter(par)
console.log(resultado);