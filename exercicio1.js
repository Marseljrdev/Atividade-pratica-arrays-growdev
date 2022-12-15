// 1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos
//    inteiros já preenchido e imprima todos os valores pares.

let vetorNumeros = [14, 29, 10, 25, 47, 15, 87, 76, 39, 11, 8, 12, 51, 62, 88];


for( let i = 0; i <= vetorNumeros.length; i++ ) {

    if(vetorNumeros[i] % 2 === 0) {
        console.log(`[${vetorNumeros[i]}] esses sao os numeros pares do vetor`);
    }
    
} 

// console.log(vetorNumeros.length);

