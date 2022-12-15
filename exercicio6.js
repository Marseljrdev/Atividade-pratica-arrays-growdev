// 6. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
//    e que exiba a lista desses nomes na tela. Após exibir essa lista, o
//    programa deve mostrar também os nomes na ordem inversa em
//    que o usuário os digitou.

//    Ex:
//    Entrada: Édson, Marcelo, Letícia, Ju, Thobias
//    Saída: Thobias, Ju, Letícia, Marcelo, Édson


let listaNome = [];
    for(let i = 0; i < 5; i++) {
        listaNome.push(prompt("Digiter seu nome: "));
    
    }
    console.log(listaNome);
    console.log(listaNome.reverse());
