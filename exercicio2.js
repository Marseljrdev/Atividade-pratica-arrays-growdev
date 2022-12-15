// 2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
//    inteiros e no final mostre a soma de todos os elementos.



let vetorNumeros = [14, 29, 10, 25, 47, 15, 87, 76, 39, 11, 8, 12, 51, 62, 88, 74, 25, 18, 29, 30];
let soma = 0;

for(let i = 0; i < vetorNumeros.length; i++) {


    console.log(vetorNumeros[i]);
    soma += vetorNumeros[i];

    
}

console.log(`A soma de todos os numeros do vetor é ${soma}`);

// console.log(vetorNumeros.length);

