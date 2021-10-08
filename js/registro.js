let registros = [];

let input = document.getElementById("btn-submit-form")

input.addEventListener('click', () => {
    axios({
        method: 'POST',
        url:'http://localhost:3000/Usuarios',
        data:  {
            'nombre' : document.getElementById("nombre").value,
            'apellido' : document.getElementById("apellido").value,
            'telefono' : document.getElementById("telefono").value,
            'correo' : document.getElementById("correo").value,
            'contrasena' : document.getElementById("password").value
        } 
    })
    .then(res=>console.log(res.data))
    .catch(err => console.log(err))

})

let agregarRegistro = () => {
    
    let registro = document.getElementsByTagName("input");
    
    let datosUsuario = {
        'nombre' : registro[0].value,
        'apellido' : registro[1].value,
        'telefono' : registro[2].value,
        'correo' : registro[3].value,
        'password' : registro[4].value
    }   
    
    registros.push(datosUsuario); 
    console.log(registros);

}



// ordena el arreglo de forma ascendente segun el apellido
let ordenarArreglo = arreglo => {
    //creamos una funcion que compara el valor unicode para posicionar en orden alfabetico
    arreglo.sort((a,b) => {
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
    return arreglo;            
}


//filtra los correos que terminan en gmail.com
let filtrarCorreo = arreglo => {

    let arreglo2 = [];
    //recorremos el arreglo para identificar cuales objetos tienen el correo gmail.com
    for (const objeto of arreglo) {
        if (objeto.correo.indexOf("gmail.com") >= 0) {
            arreglo2.push(objeto);
        }
    }    
    console.log(arreglo2);
    return arreglo2;
}

//Hicimos el llamado de todas las funciones para propar su efectividad
function llamarFunciones(){
    agregarRegistro();
    ordenarArreglo(registros);
    filtrarCorreo(registros);
}

/* module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.filtrarCorreo = filtrarCorreo; */
