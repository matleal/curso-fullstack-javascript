<<<<<<< HEAD
const clientes = [
    {name: 'John', score: 55},
    {name: 'Malorke', score: 78},
    {name: 'Macon', score: 65},
    {name: 'Mike', score: 29},
    {name: 'Leonard', score: 35},
]


//acc acumulator
//cur current
const clientesFinal = clientes.reduce((acc, curr) => {
    if(curr.score > 50){
        acc.pass.push(curr);
    }else{
        acc.fail.push(curr);
    }

    return acc;
}, {
    pass: [],
    fail: []
})


=======
const clientes = [
    {name: 'John', score: 55},
    {name: 'Malorke', score: 78},
    {name: 'Macon', score: 65},
    {name: 'Mike', score: 29},
    {name: 'Leonard', score: 35},
]


//acc acumulator
//cur current
const clientesFinal = clientes.reduce((acc, curr) => {
    if(curr.score > 50){
        acc.pass.push(curr);
    }else{
        acc.fail.push(curr);
    }

    return acc;
}, {
    pass: [],
    fail: []
})


>>>>>>> 65c64db54af02792e62cf479577e45634701490b
