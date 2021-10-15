let registros = [];


let  agregarRegistro = () => {
    
    let registro = document.getElementsByTagName("input");
    
    let datosUsuario = {
        'nombre' : registro[0].value,
        'apellido' : registro[1].value,
        'telefono' : registro[2].value,
        'correo' : registro[3].value,
        'password' : registro[4].value
    }   
    
    registros.push(datosUsuario);     
}


let captcha = document.getElementById("captcha");   
if (captcha) {
    captcha.addEventListener("click", function(){        
        captcha.type = "text";    
        document.getElementById("texto").innerHTML = "¿Qué resultado da el cuarto de un tercio de 12000?";                          
    });           
}   

function login(){    
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contrasena").value;         
    if (document.getElementById("captcha").value !== "") {           
        for (let i = 0; i < registros.length; i++) {         
            if (registros[i].correo === correo && registros[i].contraseña === contraseña) {               
                let captcha = document.getElementById("captcha").value;                              
                let validacion = validarCAPTCHA(captcha); 
                if (validacion === true) {
                    return true;
                }               
                else{
                    return false;
                } 
            }      
        }    
    }    
}


function validarCAPTCHA(valor) {    
    if (Number(valor) === 1000) {
        return true;
    }
    else {
        return false;
    }
}

module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;

