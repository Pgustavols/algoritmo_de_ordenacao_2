const listaLivros = require("./array")

function encontraMenores(pivo, array){
    let menores = 0
    for(let i = 0; i < array.length; i++){
        let produtoAtual = array[i]
        if(produtoAtual.preco < pivo.preco){
            menores += 1
        }
    }
    trocaLugar(array, array.indexOf(pivo), menores)

    return array
}

function trocaLugar(array, de, para){
    const elem1 = array[de]
    const elem2 = array[para]

    array[de] = elem2
    array[para] = elem1
}

function divideNoPivo(array){
    let pivo = array[Math.floor(array.length / 2)]
    encontraMenores(pivo, array)
    console.log(array)  
    let valoresMenores = 0

    for(let analisando = 0; analisando < array.length; analisando++){
        let atual = array[analisando]
        if(atual.preco <= pivo.preco && atual !== pivo){
            trocaLugar(array, analisando, valoresMenores)
            valoresMenores++
        }
    }
    return array
}

// console.log(divideNoPivo(listaLivros))

module.exports = trocaLugar;

