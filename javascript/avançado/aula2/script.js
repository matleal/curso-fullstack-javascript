/*
    HOISTING(IÇAR, ERGUER)

    HOISTING é o comportamento do JavaScript de mover as declarações para o topo de um escopo
*/


function teste() {
    outraFunc(); // Mesmo sabendo do hoisting isso n é uma boa pratica
    
    function outraFunc(){
        console.log('ok, sou a outra funçao');
    }
}

