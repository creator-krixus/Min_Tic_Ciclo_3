let checkNombre = (valor) =>{
    /* validación del nombre */
    let nombre = /^[a-zA-Z\s]{4,30}$/
    if (!(nombre.test(valor.nombre.value))) {
        alert('Campo nombre incorrecto el campo debe contener minimo 4 carateres y maximo 30');
        return false;
    }else{
        alert('Campo nombre correcto')
        return true;
    }
}

let checkApellido = (valor) => {
    /* validación del apellido */
    let apellido = /^[a-zA-Z\s]{4,30}$/
    if (!(apellido.test(valor.apellido.value))) {
        alert('Campo apellido incorrecto');
        return false;
    }else{
        alert('Campo apellido correcto')
        return true;
    }
}

let checkTelefono = (valor) => {
    /* validación del numero telefonico*/
    let telefono = /(^([0-9]{7,7})|^)$/;
    if (!(telefono.test(valor.telefono.value))) {
        alert('Contenido de campo telefono debe contener 7 digitos');
        return false;
    }else{
        alert('Campo telefono correcto')
        return true;
    }
}

let checkCorreo = (valor) => {
    /* validación del e-mail */
    let email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!(email.test(valor.email.value))) {
        alert('Campo email no es correcto ');
        return false;
    }else{
        alert('Campo email correcto')
        return true;
    }
}
 let CheckContrasena = (valor) => {
    /* validación del password */
    let password = /^[a-zA-Z0-9\_\-]{8,30}$/
    if (!(password.test(valor.password.value))) {
        alert('Campo nombre incorrecto');
        return false;
    }else{
        alert('Password correcto')
        return true;
    }
 }

let Valida = (valor) => {
    alert("Empiezan las validaciones");
    /* Validación de campos NO VACÍOS */
    if ((valor.nombre.value.length == 0) || (valor.apellido.value.length == 0) || (valor.telefono.value.length == 0) || (valor.correo.value.length == 0) || (valor.password.value.length == 0)) {
        alert('Uno o varios campos estan vacios vuelvelo a intentar');
        return false;
    }
    if (isNaN(parseInt(valor.telefono.value))) {
        alert('El telefono debe ser un numero');
        return false;
    }
    checkNombre(valor);
    checkApellido(valor);
    checkTelefono(valor);
    checkCorreo(valor);
    CheckContrasena(valor)

    /* si no hemos detectado fallo devolvemos TRUE */
    return true;
}

module.exports = {checkNombre, checkApellido, checkTelefono, checkCorreo, CheckContrasena}