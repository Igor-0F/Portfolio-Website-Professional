var formulario = document.querySelector('form')

formulario.addEventListener('submit', function (e) {

    //Não deixa a página recarregar
    e.preventDefault()

    let urlForm = "https://pokeapi.co/api/v2/pokemon/"
    let nome = document.getElementById("name")

    urlForm = urlForm + this.name.value

    //transforma os valores(nomes) em minusculas
    urlForm = urlForm.toLocaleLowerCase()

    let resposta = document.getElementById('content')

    let imagem = document.getElementById('imgPokemon')

    let html = ''

    //comando que pesquisa e devolve o valor
    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function (data) {
            console.log(data)
            html = 'Nome: ' + maiuscula(data.forms[0].name) + '<br>'
            html = html + 'Tipo: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })
        .catch(function (err) {
            if (err == 'SyntaxError: Unexpected token N in JSON at position 0') {
                html = 'Pokemon não encontrado!'
            } else {
                html = 'ERRO: ' + err
            }
            resposta.innerHTML = html
        })
});

function maiuscula(val) {
    return val[0].toUpperCase() + val.substr(1)
}