/*
    fetch API
*/

function transformarEmJson(response) {
    return response.json()
}

function exibirNaTela(dados) {
    console.log(dados);
}

function exibirErro() {
    console.log('Ops, deu erro na requisição!')
}

const botaoCarregar = document.querySelector('#carregarFotos');

botaoCarregar.onclick = () => 
    fetch('https://jsonplaceholder.typicode.com/photos',)
        .then(transformarEmJson)
        .then(exibirNaTela)
        .catch(exibirErro);



