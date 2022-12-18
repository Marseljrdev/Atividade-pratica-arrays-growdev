// 5. Crie uma função que recebe um vetor de inteiros e um número
//    inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
//    se não faz parte.


let vetorNumeros = [14, 29, 10, 25, 47, 15, 87, 76, 39, 11, 8, 12, 51, 62, 88];
let valor = prompt("Digite um numero: ");

let resullFinal = verificacao(vetorNumeros, valor);

function verificacao(array, valor){

    for(let index = 0; index < array.length; index++){
        if(array[index] == valor){
            return 'Verdadeiro';
        }
        
    }
    return 'Falso';

}

console.log(resullFinal);









