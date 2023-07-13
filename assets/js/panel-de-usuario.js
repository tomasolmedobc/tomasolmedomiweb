var  intentos = 0;
function login(){
if(intentos ==2){
        document.getElementById("resultado").innerHTML = "alcanzaste el maximo de intentos disponibles"
        return;
    } 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
        if (username == "" || password == "") {
            document.getElementById("resultado").innerHTML = "Falta agregar el usuario/contraseña";
            alert('Falta agregar el usuario/contraseña');
            return;
        }else if (username == "usuario" || password == "123") {
            alert('Bienvenido usuario');
            return;
        } else {
            alert('Usuario no registrado');
        }
    }