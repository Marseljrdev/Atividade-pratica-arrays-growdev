// 3. Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
//    retorne a união dos dois em um novo vetor.

let vetorNumeros = [14, 29, 10, 25, 47, 15, 87, 76, 39, 11];

let vetorNumeros2 = [8, 12, 51, 62, 88, 74, 25, 18, 29, 30];

for(let i = 0; i < vetorNumeros.length; i++) {

    uniVetor(vetorNumeros[i]);
    
}

 for(let i = 0; i < vetorNumeros2.length; i++) {

    uniVetor(vetorNumeros2[i]);

} 


function uniVetor(value) {

    let unir = 0;

    unir += value;

    console.log(unir);
    
    
}


// console.log(vetorNumeros);
// console.log(vetorNumeros2);








