// 3. Desenvolva um algoritmo que preenche um vetor com os 4
//    primeiros números perfeitos.




 let recebeNum = [];


for( let num = 1; recebeNum.length < 4; num++) {

   numPerfeito(num);

}

function numPerfeito(num) {

    let soma = 0;

    for(let i = 1; i < num; i++) {

        if(num % i == 0) {
            soma += i;
        }

    }

    if(soma == num) {
        recebeNum.push(num)
    }

    
    
} 

for(let index = 0; index < recebeNum.length; index++){

    console.log(recebeNum[index])
} 


