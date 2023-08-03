/*class Registro {
    constructor(){
        this.nombre = "";
        this.apellido = "";
        this.email = "";
        this.password = "";
    }
    get getNombre() {
        return this.nombre;
    }
    set getnombre(nombre){
        this.nombre = nombre;
    }
}
console.log(scooby.setNombre);
scooby.setNombre = "Tomas";
console.log(scooby.setNombre);
*/
class Registro {
    constructor() {
        this.nombre = "";
        this.apellido = "";
        this.usuario = "";
        this.email = "";
        this.password = "";
    }
    getNombre() {
        return this.nombre;
    };
    setNombre(nombre) {
        this.nombre = nombre;
    };
    getApellido() {
        return this.apellido;
    };
    setApellido(apellido) {
        this.apellido = apellido;
    };
    getUsuario() {
        return this.usuario;
    };
    setUsuario(usuario) {
        this.usuario = usuario;
    };
    getEmail() {
        return this.email;
    };
    setNombre(email) {
        this.email = email;
    };
    getPassword() {
        return this.password;
    };
    setPassword(password) {
        this.password = password;
    };
    getDatoCompleto(){
        return "Usuario:" + this.usuario + " " + "Nombre:" +this.nombre + " " + "Apellido:" + this.apellido + " "  +"Email:" + this.email + " " + "Contraseña:" + this.password;
    };
    setDatoCompleto(usuario,nombre,apellido,email,password){
    this.usuario = usuario;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
    }
}
const registro = new Registro();

registro.setNombre("Juan");
console.log(registro.getNombre()); // Salida: "Juan"

const registro1 = new Registro();
registro1.setDatoCompleto("tolmedo","Tomas","Olmedo","tomasolmedobc@gmail.com","9877");
console.log(registro1.getDatoCompleto());
