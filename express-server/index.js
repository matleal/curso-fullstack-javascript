const express = require('express');
const path = require('path');
const app = express();

//Definindo os arquivos estaticos
//Utilizamos a biblioteca path para achar caminhos inteiros e concatenar com o diretorio que queremos
app.use(express.static(path.join(__dirname, 'views')));

//Definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')));



//rotas
app.get('/', (req, res) => {
    res.render('views/index');
})

app.get('/sobre', (req, res) => {
    res.send('Sobre');
})



//404 not found
app.use((req, res) =>{ //middleware
    res.send('Pagina não encontrada');
})



//Executando o servidor
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on ${port}`));