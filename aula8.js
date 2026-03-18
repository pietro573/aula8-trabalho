const modelo = [
{
    titulo: 'a volta ao mundo em 80 dias',
    autor: 'júlio verne',
    ano:'1873',
    paginas:'entre 240 e 336',
    sinopse:'narra a aposta de Phileas Fogg, um inglês metódico que, com seu criado Passepartout, tenta dar a volta ao globo em 80 dias para ganhar 20.000 libras. Enfrentando obstáculos e perseguidos pelo detetive Fix, eles atravessam continentes usando diversos transportes. ',
    preço:'19,44',

},

{
    filme: 'sonic 3',
    autor: 'Pat Casey, Josh Miller e John Whittington',
    ano:'2024',
    duração:'1 hora e 50 minutos',
    sinopse:'Sonic, Knuckles e Tails se juntam para enfrentar Shadow, um novo e misterioso inimigo com poderes diferentes de tudo que já enfrentaram antes. As habilidades do trio são superadas em todos os aspectos e eles precisam buscar uma improvável aliança.',
    preço:'de 25,00 a 50,00',

},

{
    serie: 'the amazing digital circus (TADC)',
    autor: 'gooseworks',
    ano:'13 de outubro de 2023',
    episodios:'7',
    sinopse:'A história acompanha uma mulher que fica presa dentro de um mundo virtual caótico e colorido após colocar um headset de realidade virtual estranho. Ela perde todas as memórias de sua vida passada, incluindo seu nome, e é rebatizada como Pomni por Caine, uma inteligência artificial maluca e onipotente que atua como mestre de cerimônias do circo Pomni se junta a outros cinco humanos presos no mesmo ambiente: Jax, Ragatha, Gangle, Kinger e Zooble, que estão ali há anos. Enquanto Caine os submete a aventuras perigosas e atividades bizarras para evitar que enlouqueçam, Pomni tenta desesperadamente encontrar uma saída, enquanto lida com a angústia de sua nova realidade digital',
    preço:'Padrão: R$ 44,90/mês na netflix.',

},

{
    jogo: 'just shapes and beats',
    autor: 'berzek studios',
    ano:'31 de maio de 2018',
    genero:'Bullet-hell musical / Jogo de ritmo.',
    sinopse:'O jogo apresenta uma narrativa simples no modo história, onde você guia o protagonista (um pequeno cubo) através de um mundo corrompido, enfrentando "batidas" e obstáculos perigosos, com o objetivo de sobreviver e restaurar a ordem.',
    preço:'R50,00',

},

{
    seila: 'pietro',
    autor: '24/12/2009',
    ano:'3°dsc',
    paginas:'',
    sinopse:'',
    preço:'',

},
]
const alunosJSON = JSON.stringify(alunos)
console.log(alunos)
console.log(alunosJSON)
console.log([0].nome)
console.log(alunosJSON)

const alunosOBJ = JSON .parse(alunosJSON)
console.log(alunosOBJ)

function criaArquivos(obj){
    const dadosJSON = JSON.stringify(obj)
    const fs = require('fs')
    fs.writeFileSync('alunos.json', dadosJSON)
}

criaArquivos(alunos);

const arquivo = require('./alunos.json')
console.log(arquivo)