let arreglo = [];
let nombre = "";
let apellido = "";
let telefono = "";
let correo = "";
let password = ""

const agregarRegistro = () => {
    
 let registro = {
     'nombre' : document.getElementById('nombre').value,
     'apellido' : document.getElementById('apellido').value,
     'telefono' : document.getElementById('telefono').value,
     'correo' : document.getElementById('correo').value,
     'password' : document.getElementById('password').value,
 }
 arreglo.push(registro);
 console.log(arreglo)
 document.getElementById('nombre').value = "";
 document.getElementById('apellido').value = "";
 document.getElementById('telefono').value = "";
 document.getElementById('correo').value = "";
 document.getElementById('password').value = "";

}

const ordenarArreglo = (arreglo) => {
 return true;
}
module.exports = {agregarRegistro, ordenarArreglo}