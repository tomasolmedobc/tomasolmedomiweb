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


/*************************** */
///Funcion declarada
function estoEsUnaFuncion(){
    console.log("uno");
}
///invocación de la función
estoEsUnaFuncion();