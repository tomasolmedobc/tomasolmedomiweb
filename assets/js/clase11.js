/*
var miObjeto = {
    //Atributos
    nombre: "Tomas",
    edad:32,
    direccion: {
        calle: "cerrito",
        numero:149
    },
    //metodos
    saludar: function () {
        return "hola" + this.nombre;
    },
    gritar: function(){
        return "!!!!!!!";
    }
}
miObjeto
console.log(miObjeto.direccion);
miObjeto.telefono = 242423;
miObjeto
*/
/*
let usuario = {
    email: "",
    password: "",

    validar: function () {
    if (this.email == "") return false;
    if (this.password == "") return false;
    return true;    
    },
    login: function(){
    //llamar API
    }
};


    //Clase

//metodo constructor
function Persona(nombre, apellido) {
    //atributos
    this.nombre = nombre;
    this.apellido = apellido;
    //metodos
    this.saludar = function(){
        return this.nombre + "hola " + this.apellido 
    }
}
//Instanciar (Crear un objeto) -> new


var persona1 = new Persona("Tomas", "Olmedo");
var persona2 = new Persona("Agustin", "Olmedo");

var personas = [];
personas.push(persona1);
personas.push(persona2);

*/

function Persona() {
    //atributos
    this.nombre = "";
    this.apellido = "";
    this.edad = "";
    this.email = "";
    this.password = "";
    //metodos
    this.saludar = function(){
        return this.nombre + "hola " + this.apellido 
    }
    //getters y setters
    this.getNombre = function(){
        return this.nombre;
    }
    this.setNombre = function(n){
        this.nombre = n;
    }
}
//Instanciar (Crear un objeto) -> new


var persona1 = new Persona("Tomas", "Olmedo");
var persona2 = new Persona("Agustin", "Olmedo");

var personas = [];
persona1.setNombre = ("Tomas");

personas.push(persona1);
personas.push(persona2);