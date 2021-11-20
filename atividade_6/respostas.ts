//1. Crie um array de números em typescript e escreva um código que exibe a soma dos elementos.
console.log('q1-');
let soma : number = 0;
let numeros: number[] = [1, 2, 3, 4];
for(let i: number = 0; i < numeros.length; i++){
    soma = soma + numeros[i];
}
console.log(soma);

//2. Considere o trecho de código abaixo e descreva o que acontece com a execução do código abaixo:
// Tal código lista os valores aramazenados do array e um valor indefinido.
console.log('q2-');
let a : number[] = [1,2,3,4,5];
for (let i : number = 0; i <= a.length - 1; i++){
    console.log(a[i]);
}

//3. Declare um array com 10 números e exiba-os em ordem crescente e em ordem decrescente.
console.log('q3-');
let b : number[] = [1,2,3,4,5,6,7,8,9,10];
for (let i : number = 0; i <= b.length - 1; i++){
    console.log(b[i]);
}
console.log('--------------------------------');
for (let i : number = b.length - 1; i >= 0; i--){
    console.log(b[i]);
}

/*4. Declare uma string com o texto “Instituto Federal do Piauí” e use métodos específicos
para:
a. Exibir a string toda em maiúsculo;
b. Retornar o caractere da posição 10;
c. Retornar a última posição da vogal “o”;
d. Dividir a frase em um array de strings tendo como delimitador os caracteres de
espaço.*/
console.log('q4-');
let msg : string = 'Instituto Federal do Piauí';
//a
console.log(msg.toUpperCase());
//b
console.log(msg.charAt(10));
//c
console.log(msg.indexOf('o'));
//d
console.log(msg.split(' '));