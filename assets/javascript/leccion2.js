/*
Ejemplo de tipos de datos
en JavaScript

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



let numero = 10;
resultado = (numero % 2 == 0) ? "Número par" : "Número impar";
console.log(resultado)


let edad = "18";

if (isNaN(edad)) {
    console.log("No es un numero");
    
}
else{
    let resultado= (edad >=18) ? "Puede votar" : "Muy joven para votar";
    console.log(resultado);
}
6am - 11am - buenos dias
12pm - 18pm - buenas tardes
19 pm - 24pm - buenas noches
0am - 6 am - durmiendo


let horaActual = 1;
let mensaje;

if (horaActual >= 6 && horaActual <= 11) {
    mensaje = "buenos dias";
    console.log("Buenos dias");   
}
else if (horaActual >= 12 && horaActual <= 18) {
    mensaje = "buenos tardes";
    console.log("buenas tardes");
}
else if (horaActual >= 19 && horaActual <= 24){
    mensaje = "buenos noches";
    console.log("buenas noches");
}
else if(horaActual >= 0 && horaActual < 6){
    mensaje = "Durmiendo";
    console.log("Durmiendo");
}
else{
    mensaje = "Valor incorrecto";
}

console.log(mensaje)
*/