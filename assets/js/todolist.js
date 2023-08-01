/*
function agregarLista() {
    var input = document.getElementById("input"); //objeto
    var lista = document.getElementById("lista"); //objeto
    var tarea = input.value; //String
    var anteriorTarea = lista.innerHTML;

    lista.innerHTML = "<li>" + tarea + "</li>" + anteriorTarea;
    input.value = "";
}

*/
/* Una forma de agregar elementos al array a traves del input

var tareas = [];
function agregarLista() {
    var input = document.getElementById("input");
    var lista = document.getElementById("lista");
    var tarea = input.value;
    tareas.push(tarea);
    lista.innerHTML = "";
    for(var i = 0; i < tareas.lenght; i++){
        lista.innerHTML = lista + "<ul>" + tareas[i] + "</ul>";
    }
    console.log(tareas);
    input.value = "";
}

*/
// Modelo de datos
let tareas = [];

function agregarLista() {
    let input = document.getElementById("input");
    let tarea = input.value;
    tareas.push(tarea);
    imprimirLista();
    input.value = "";
}
function sacarLista(){
    tareas.pop();
    imprimirLista();

}
function limpiarLista(){
    tareas = [];
    imprimirLista();
}

function imprimirLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    for(let i=0; i < tareas.length; i++) {
    lista.innerHTML = lista.innerHTML + "<li>" + tareas[i] + "</li>";
    }
}