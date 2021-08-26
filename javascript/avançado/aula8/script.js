<<<<<<< HEAD
/*
    LOCAL STORAGE
*/

const tarefas = [
    { tarefa: 'estudar js'},
    { tarefa: 'estudar node js'},
    { tarefa: 'estudar react js'},
]

const tarefasJson = JSON.stringify(tarefas);

localStorage.setItem('tarefas', tarefasJson);

const listaTarefasSalvas = localStorage.getItem('tarefas');

const listaTarefasObj = JSON.parse(listaTarefasSalvas);

=======
/*
    LOCAL STORAGE
*/

const tarefas = [
    { tarefa: 'estudar js'},
    { tarefa: 'estudar node js'},
    { tarefa: 'estudar react js'},
]

const tarefasJson = JSON.stringify(tarefas);

localStorage.setItem('tarefas', tarefasJson);

const listaTarefasSalvas = localStorage.getItem('tarefas');

const listaTarefasObj = JSON.parse(listaTarefasSalvas);

>>>>>>> 65c64db54af02792e62cf479577e45634701490b
console.log(listaTarefasObj);