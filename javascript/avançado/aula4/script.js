const clientes = [
    {name: 'John', lastName: 'Roosvelt'},
    {name: 'John', lastName: 'Morroy'},
    {name: 'John', lastName: 'Sant'},
]

let clientesFinal = [];

clientes.forEach(function (cliente){
    clientesFinal.push(cliente.name + ' ' + cliente.lastName);
})

//map é um metodo mapeia certa array e jogar dentro de uma variavel escolhida tornado a uma array.
let clientesFinalMap = clientes.map((cliente) =>  cliente.name + ' ' + cliente.lastName);
