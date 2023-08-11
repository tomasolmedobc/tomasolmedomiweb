/*

//cadena de texto aka String
let nombre = "Tom";
let apellido = "Olmedo";
let saludo = `Hola mi nombre es ${nombre} ${apellido}`;
console.log(saludo);

let ul = `<ul>
<li>Primavera</li>
<li>Verano</li>
<li>Otoño</li>
<li>invierno</li>
</ul>`;
console.log(ul);

///Numbers 
let a = 2;
let b = new Number(1);
let c = 1.19;
let d = "5.6";

console.log(typeof c, typeof d);
console.log(a,b);
console.log(c.toFixed(1));
console.log(c.toFixed(5));
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(c + parseInt(d));
console.log(c + parseFloat(c));
console.log(c + Number.parseInt(d));
console.log(c + Number.parseFloat(c));

///boleanos
let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

///Undefined indica que no se ha inicializado una variable y que el valor esta ausente
let indefinida;
console.log(indefinida);
///Null es un valor especial que indica la ausencia de valor
let nulo = null;
console.log(nulo);

//NaN _ Not a Number
let noEsUnNumero = "hola" * 3.7;
console.log(noEsUnNumero);


/*************************** 
///Funcion declarada
function estoEsUnaFuncion(){
    console.log("uno");
}
///invocación de la función
estoEsUnaFuncion();
/*


saludar = (nombre) => {
    console.log(`Hola mi nombre es ${nombre}`);
}
saludar();
console.log(saludar);



function saludar(nombre,edad) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad}`);

}
saludar("tomas",32);
//Funcion declarada vs expresaa
funcionDeclarada();

function funcionDeclarada() {
    console.log("Esta es una funcion declarada, puede invocarse en cualquier parte del codigo")
}

funcionDeclarada();
funcionExpresada();
//funcion anonima
const funcionExpresada = function (){
    console.log("Esto  es una funcion, expresada es decir que se le asigado un valor a una variable, si invocamos esta funcion antes de su defininicion js nos dira..");
}

funcionExpresada();

//arrays
const miArray = [];
const miArray2 = [1,"hola", "A", "B", "C"];
console.log(miArray);
console.log(miArray2.length);

const arrc = Array.of("x",99,"hola",123);
console.log(arrc);


//metodos array
const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

//agrega un elemento al array en el ultimo puesto
colores.push("Negro");
console.log(colores);

//metodo pop saca el ultimo array
colores.pop()
console.log(colores);
*/
/*
//Objetos
//Dentro de un objeto a las variables se le van a llamar atributos/propiedades y a las funciones se les llama metodos
const tomas = {
    nombre:"Tom",
    apellido:"Olmedo",
    edad:32,
    pasatiempos:["Jugar videojuegos","Dormir"],
    soltero:true,
    contacto:{
        email:"tomasolmedobc@gmail.com",
        twitter:"tomasolmedobc",
        movil:1231233
    },
    saludar: function (){
        console.log(`hola :)`);
    },
    decirMiNombre: function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

console.log(tomas);
console.log(tomas.nombre);
console.log(tomas.apellido);
console.log(tomas.soltero);
console.log(tomas.pasatiempos);
console.log(tomas.pasatiempos[0]);
console.log(tomas.contacto.twitter);
tomas.saludar();
tomas.decirMiNombre();

//listar en una array todo lo q esta en el objeto|
console.log(Object.keys(tomas));
//lista en un array todo los valores que hay en el objeto
console.log(Object.values(tomas));
console.log(tomas.hasOwnProperty("nombre"));
*/

//Ciclo 
// let contador = 0;

// while (contador < 10) {
//     console.log(contador);
//     contador ++;
// }
// console.log(contador);

//For

// for ( let i = 0; i < 10; i++){
//     console.log("for" + i)
// }
// let numeros = [10,20,30,40,50,60,70,80,90];

// for(let i = 0; i < numeros.length; i++){
//     console.log(numeros[i]);
// }
// const tom = {
//     nombre:"tom",
//     apellido:"Olmedo",
//     edad:32
// }

// //for in, solo permite recorrer propiedades de un objeto
// for (const propiedad in tom){
//     //console.log(propiedad);
//     console.log(`Key:${propiedad}.Value:${tom[propiedad]}`);
// }

// //for of permite recorrer todos los elementos de cualquier objeto que se iterable
// //iterable que se pueda partirlo en pequeños elementos
// for(const elemento of numeros){
//     console.log(elemento)
// }

// let cadena = "hola merto"

// for(const caracter of cadena){
//     console.log(caracter);
// }