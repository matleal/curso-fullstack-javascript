<<<<<<< HEAD
/*
    DESTRUCTURING ASSIGMENT (Desestruturação de atribuição)
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

botaoCarregar.onclick = aoClicarNoBotao;

async function aoClicarNoBotao() {
    const dados = await fetch('https://jsonplaceholder.typicode.com/users/1',)
        .then(transformarEmJson)
        .catch(exibirErro);

    const { name, email, phone } = dados;

    console.log(name, email, phone)
}
    



=======
/*
    DESTRUCTURING ASSIGMENT (Desestruturação de atribuição)
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

botaoCarregar.onclick = aoClicarNoBotao;

async function aoClicarNoBotao() {
    const dados = await fetch('https://jsonplaceholder.typicode.com/users/1',)
        .then(transformarEmJson)
        .catch(exibirErro);

    const { name, email, phone } = dados;

    console.log(name, email, phone)
}
    



>>>>>>> 65c64db54af02792e62cf479577e45634701490b
