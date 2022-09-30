//Adicionando o som de cada botão

function tocaSom(idElementoAudio) {

    const elemento = document.querySelector(idElementoAudio);

    if (elemento === null) {
        alert('Elemento não encontrado');
    }

    if (elemento !== null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Elemento não encontrado');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

//Loop para acessar todas as teclas de som
while (contador < listaDeTeclas.length) { //ou for(let contador = 0; contador < listaDeTeclas.length; contador++)

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () { //function () = função anônima
        tocaSom(idAudio)
    };
    contador = contador + 1;

    //Deixar o botão vermelho ao pressionar com o teclado (espaço ou enter)
    tecla.onkeydown = function (evento) { //onkeydown = evento que representa quando uma tecla do teclado está pressionada
        if (evento.code === 'Enter' || evento.code === 'Space') { //code: mostra nos nomes das teclas
            tecla.classList.add('ativa');//ativa = classe que deixa a tecla vermelha
        }
    }

    //Obs: '=' atribui um valor | '==' verifica igualdade, compara valores | '===' compara não só o valor, mas também o tipo dos dados (ex: número e texto)

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');//para remover a cor vermelha após pressionar o botão
    }

}
