/*
Ejemplo de tipos de datos
en JavaScript
*/
//tipo de dato string
var nombre = "Tomas";

console.log(nombre);

nombre = 10;

console.log(typeof nombre)

//tipo de dato numerico
var numero = 1000;

console.log(numero);

//Tipo de dato object
var objecto = {
    nombre : "Tomas",
    apellido : "Olmedo",
    telefono : "21312321"
}

console.log(typeof objecto);

//Tipo de dato boolean
var bandera = true
console.log(bandera);

//Tipo de dato function

function miFuncion(){
}
console.log(miFuncion);

//tipo de dato symbol

var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//tipo clase es una function
class Persona{
    constructor(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    }
}
console.log(Persona);

//Tipo undefined
var x;
console.log(x);

//Tipo null = ausencia de valor
var y = null;
console.log(y)