const jogo = [

{
    jogo: 'just shapes and beats', 'plants vs zombies1',
    autor: 'berzek studios', 'pop cap',
    ano:'31 de maio de 2018', '5 de maio 2009',
    genero:'Bullet-hell musical / Jogo de ritmo.',
    sinopse: 'O jogo apresenta uma narrativa simples no modo história, onde você guia o protagonista (um pequeno cubo) através de um mundo corrompido, enfrentando "batidas" e obstáculos perigosos, com o objetivo de sobreviver e restaurar a ordem.',
    preco:'R$ 50,00',

},


]
const jogosJSON = JSON.stringify(jogo)
console.log(jogo)
console.log(jogosJSON)
console.log([0].jogo)
console.log(jogosJSON)

const jogosOBJ = JSON .parse(jogosJSON)
console.log(jogosOBJ)

function criaArquivos(obj){
    const dadosJSON = JSON.stringify(obj)
    const fs = require('fs')
    fs.writeFileSync('jogos.json', dadosJSON)
}

criaArquivos(jogo);S
const arquivo = require('./jogos.json')
console.log(arquivo)
