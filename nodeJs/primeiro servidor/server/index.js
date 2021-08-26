const http = require('http');
const fs = require('fs');



const server = http.createServer(function(request, response){
    console.log(request.url);

    if(request.url === '/'){
        fs.readFile('../client/index.html', function(err, data){
            response.end(data);
        })
    }
    if(request.url === '/teste'){
        response.end("ok, funcionou");
    }
})

server.listen(8080);
console.log("servidor executando na porta 8080");