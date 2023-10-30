const {edGalho, edFolha} = require('./arrays')

function juntaListas(lista1, lista2){
    listaFinal = []
    posicaoLista1 = 0
    posicaoLista2 = 0

    while(posicaoLista1 < lista1.length && posicaoLista2 < lista2.length){
        if(lista1[posicaoLista1].preco < lista2[posicaoLista2].preco){
            listaFinal.push(lista1[posicaoLista1])
            posicaoLista1 += 1
        }
        else{
            listaFinal.push(lista2[posicaoLista2])
            posicaoLista2 += 1
        }
    }
    
    while(posicaoLista1 < lista1.length){
        listaFinal.push(lista1[posicaoLista1])
        posicaoLista1++
    }
    while(posicaoLista2 < lista2.length){
        listaFinal.push(lista2[posicaoLista2])
        posicaoLista2++
    }

    return listaFinal
}

listaOrdenada = juntaListas(edGalho, edFolha)
console.log(listaOrdenada);
