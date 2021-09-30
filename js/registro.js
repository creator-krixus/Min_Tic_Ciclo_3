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
 console.log(arreglo); 
 document.getElementById('nombre').value = "";
 document.getElementById('apellido').value = "";
 document.getElementById('telefono').value = "";
 document.getElementById('correo').value = "";
 document.getElementById('password').value = "";

}


// ordena el arreglo de forma ascendente segun el apellido
function ordenarArreglo(arreglo){
    //creamos una funcion que compara el valor unicode para posicionar en orden alfabetico
    arreglo.sort((a,b) => {
        console.log(a);
        console.log(b)
        
        //convertimos los apellidos a minuscula
        const apellidoA = a.apellido.toLowerCase();
        const apellidoB = b.apellido.toLowerCase();

        if (apellidoA < apellidoB) {        
            return -1;
        }
        else if (apellidoA > apellidoB) {    
            return 1;
        }
        else{
            return 0;
        }    
    });
    
    console.log(arreglo);    
            
}


//filtra los correos que terminan en gmail.com
function filtrarCorreo(arreglo){
    

    let arreglo2 = [];
    //recorremos el arreglo para identificar cuales objetos tienen el correo gmail.com
    for (const objeto of arreglo) {
        if (objeto.correo.indexOf("gmail.com") >= 0) {
            arreglo2.push(objeto);
        }
    }    
    console.log(arreglo2);
}

//Hicimos el llamado de todas las funciones para propar su efectividad
function llamarFunciones(){
    agregarRegistro();
    ordenarArreglo(arreglo);
    filtrarCorreo(arreglo);
}

module.exports = {agregarRegistro, ordenarArreglo, filtrarCorreo}