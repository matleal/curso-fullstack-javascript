/*
    SINCRONO vs ASSINCRONO

    Um dos exemplos de codigo assincrono, são requisições com apis.
*/

function primeira() {
    console.log("primeira");
}

function segunda() {
    console.log("segunda");
}

setTimeout(primeira, 2000); // assincrono

segunda();
