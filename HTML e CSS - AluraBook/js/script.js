async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)//cep = id no html
        var consultaCEPConvertida = await consultaCEP.json()
        if (consultaCEPConvertida.erro) { //caso tenha todos os dígitos, mas não exista, pois viaCEP não faz essa tratativa
            throw Error ('CEP não existe!')
        }
        var cidade = document.getElementById('cidade') //cidade = id no html
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')

        cidade.value = consultaCEPConvertida.localidade //localidade, logradouro e uf = como estão descritos no retorno JSON da API
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf

        //console.log(consultaCEPConvertida)
        return consultaCEPConvertida
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido!</p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value)) //focusout = quando clica fora do campo de digitação