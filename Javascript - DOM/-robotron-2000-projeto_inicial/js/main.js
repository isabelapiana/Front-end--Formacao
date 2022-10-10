/* Introdução

const robotron = document.querySelector('#robotron')

robotron.addEventListener ("click", (event) => { //função declarada pode ser utilizada em outros locais, funções anônimas (function ()) apenas no momento em que são chamadas
    console.log(event) 
}) 

function dizOi(nome) {
    console.log('Oi ' + nome)
    console.log('Bem vindo(a)')
}

dizOi('Maria')

dizOi()
*/

const somar = document.querySelector('#somar')
const subtrair = document.querySelector('#subtrair')

const controle = document.querySelectorAll('[data-controle]')
const estatistica = document.querySelectorAll('[data-estatistica]')

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

/* 
const peca = document.querySelector('#braco')
somar.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) + 1 //parseInt = passa de string para int, para que possa realizar cálculos
})

subtrair.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) - 1
})
*/ 

//Evitando a repetição de código: 

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipularDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizarEstatisticas(evento.target.dataset.peca)
    })
})

function manipularDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]')
    if(operacao === "+") {
        peca.value = parseInt(peca.value) + 1
    }else{
        peca.value = parseInt(peca.value) - 1
    }
}

function atualizarEstatisticas(peca) {
    estatistica.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}
