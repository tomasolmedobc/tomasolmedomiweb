let  intentos = 0;
function login(){
if(intentos ==2){
        document.getElementById("resultado").innerHTML = "alcanzaste el maximo de intentos disponibles"
        return;
    } 
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
        if (email == "" || password == "") {
            document.getElementById("resultado").innerHTML = "Falta agregar el usuario/contraseña";
            alert('Falta agregar el usuario/contraseña');
            return false;
        }else if (email == "1@1" || password == "123") {
            alert('bienvenido');
            return false;
        } else {
            alert('Usuario no registrado, vaya al panel de registro');
            document.getElementById("resultado").innerHTML = "Usuario no registrado, vaya al panel de registro"
        }
    }
