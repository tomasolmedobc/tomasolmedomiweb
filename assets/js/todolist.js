
function agregarLista() {
    var input = document.getElementById("input"); //objeto
    var lista = document.getElementById("lista"); //objeto
    var tarea = input.value; //String
    var anterioTarea = lista.innerHTML;

    lista.innerHTML = "<li>" + tarea + "</li>" + anterioTarea;
    input.value = "";

}