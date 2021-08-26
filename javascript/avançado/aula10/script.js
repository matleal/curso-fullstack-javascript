<<<<<<< HEAD
/*
    AJAX

    Asynchronus Javascript and XML

    
*/

const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        console.log(JSON.parse.this.responseText);
    }
}

xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
xhttp.send();
=======
/*
    AJAX

    Asynchronus Javascript and XML

    
*/

const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        console.log(JSON.parse.this.responseText);
    }
}

xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
xhttp.send();
>>>>>>> 65c64db54af02792e62cf479577e45634701490b
