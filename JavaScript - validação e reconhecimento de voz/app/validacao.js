function verificaSeOChutePossuiUmValorValido() {
    const numero = +chute //transformar a string falada em um número

    if (Number.isNaN(numero)) { //verificar se o que foi dito é um número
        elementoChute.innerHTML += '<div>Valor inválido!</div>'
        return //para que não execute mais nada desta função
    }

    if (numeroMaiorOuMenorQueOPermitido(numero)) {
       elementoChute.innerHTML += `<div>Valor fora do intervalo! O número está entre ${menorValor} e ${maiorValor}.</div>`
       return //para que não execute mais nada desta função
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}!</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function numeroMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => { //botão - jogar novamente
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
