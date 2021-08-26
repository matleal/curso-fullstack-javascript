/*
    ARROW FUNCTIONS

    ES6 
    Basicamente nos permite escrever sintaxe de funções de forma mais curta
*/

//arrow functions na forma normal
const teste = (param1, param2) => {
    return param1+param2;
}


//arrow functions com retorno implicito 
const teste2 = (param3, param4) => param3+param4;

let resultado1 = teste(1,2);
let resultado2 = teste2(1,2);


//arrow functions com um parametro n necessite de parenteses
const teste3 = param1 => {
    console.log(param1);
}

//arrow functions tratam o this de forma diferente, ele trata o escopo de onde a função esta sendo chamada
//por exemplo, se a func for chamada em um escopo global, oq o this vai retornar vai ser o obj window.
