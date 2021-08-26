<<<<<<< HEAD
/*
    CALLBACK
*/

function exibirNaTela(dados) {
    console.log(dados);
}

const botaoCarregar = document.querySelector('#carregarFotos');

botaoCarregar.onclick = () => carregarFotos(exibirNaTela);

function carregarFotos (callback){
    const xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            const response = JSON.parse(this.responseText);

            if(callback){
                callback(response);
            }
        }
    }
    
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
    xhttp.send();
}


=======
/*
    CALLBACK
*/

function exibirNaTela(dados) {
    console.log(dados);
}

const botaoCarregar = document.querySelector('#carregarFotos');

botaoCarregar.onclick = () => carregarFotos(exibirNaTela);

function carregarFotos (callback){
    const xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            const response = JSON.parse(this.responseText);

            if(callback){
                callback(response);
            }
        }
    }
    
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
    xhttp.send();
}


>>>>>>> 65c64db54af02792e62cf479577e45634701490b
