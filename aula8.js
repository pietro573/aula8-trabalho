const jogo = [

{
    jogo: 'just shapes and beats', 
    autor: 'berzek studios',
    ano:'31 de maio de 2018', 
    genero:'Bullet-hell musical / Jogo de ritmo.', 
    sinopse: 'O jogo apresenta uma narrativa simples no modo história, onde você guia o protagonista (um pequeno cubo) através de um mundo corrompido, enfrentando "batidas" e obstáculos perigosos, com o objetivo de sobreviver e restaurar a ordem.',
    preco:'R$ 50,00',

},

{
    jogo: 'plants vs zombies1',
    autor: 'pop cap',
    ano:'5 de maio 2009',
    genero:'tower defense', 
    sinopse: 'nesse jogo você está no meio de um apocalipse zumbi onde sua unica forma de sobreviver é usando plantas especiais no seu jardim para conter as ameaças, coma ajuda de seu vizinho crazy dave que te auxiliara em algumas fases explicando o que fazer ',
    preco:' gratis no mobile e PC',

},

{
    jogo: 'poppy playtime 5',
    autor: ' mob enterteniment',
    ano:'18 de fevereiro de 2026',
    genero:'terror', 
    sinopse: 'apos todos os perigos enfrentados você agora está nos laboratorios da fabrica e novos inimigos e aliados te esperam para tentar por um ponto final nessa história ',
    preco:'19,99 na steam',
},

{
    jogo: 'team fortrees 2',
    autor: 'valve',
    ano:'10 de outubro de 2007',
    genero:'hero shooter', 
    sinopse: 'nesse jogo você controla um dos 9 mercenarios contratados para conquistar o terreno do time adversario ',
    preco:'gratis na steam',

},

{
    jogo: 'tekken 5',
    autor: 'valve',
    ano:'2004 pra arcade e 2005  pra play station2 ',
    genero:'luta', 
    sinopse: 'nesse jogo você controla um dos 9 mercenarios contratados para conquistar o terreno do time adversario numa luta interminavel entre dois irmãos bluetarch manne redmon mann ',
    preco:'gratis na steam'

},

{
    jogo: 'beamNG drive',
    autor: 'BeamNG GmbH',
    ano:'29 de maio de 2015',
    genero:'Estilo: Simulação, "Soft-body physics"', 
    sinopse: 'escolha um carro um mapa e teste suas habilidades de motorista',
    preco:'steam 24,99 ',

},
{
    jogo: 'happy wheels',
    autor: 'Jim Bonacci',
    ano:'4 de junho de 2010',
    genero:' rolagem lateral e baseado em física', 
    sinopse: ' existem varios niveis pra você se divertir com pula pulas, bicicletas e muito mais',
    preco:'de graça na play store e existe um site ',

},
{
    jogo: 'UESB but better',
    autor: ' Richalala_oficial',
    ano:'4 de julho de 2024',
    genero:'bullet hell', 
    sinopse: ' nesse jogo você luta contra a versão corrompida do sans de undertale que vira algo como um virus de computador com seus arquivos totalmente corrompidos',
    preco:' degraça na game jolt',

},
{
    jogo: '',
    autor: '',
    ano:'',
    genero:'', 
    sinopse: ' ',
    preco:'',

},
{
    jogo: '',
    autor: '',
    ano:'',
    genero:'', 
    sinopse: ' ',
    preco:'',

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
