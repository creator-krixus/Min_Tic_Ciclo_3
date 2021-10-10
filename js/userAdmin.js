let url = "http://localhost:3000/Usuarios";
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (let i = 0; i<data.length; i++){
        body += `<tr id="row" onclick="datos(this)"><td id="id">${data[i].id}</td><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td>${data[i].correo}</td><td>${data[i].telefono}</td><td><button id="editar"><a href="#miModal" id="btn-edit-data" >Editar</a></button>  <button>eliminar</button></td></tr>`        
    }        
    document.getElementById('data').innerHTML = body;
}    



function datos(x){
    console.log(x.cells[0].textContent);     

   document.getElementById("nombre").value =x.cells[1].textContent;
   document.getElementById("apellido").value = x.cells[2].textContent;
   document.getElementById("correo").value = x.cells[3].textContent;
   document.getElementById("telefono").value = x.cells[4].textContent; 
}

/* let guardar = document.getElementById("save");
guardar.addEventListener('click', function(){
    console.log("hola");
    axios({
    method: 'POST',
    url:'http://localhost:3000/Usuarios',
    data:  {
        'id' : document.getElementById("nombre").value = padre.childNodes[0].textContent,
        'nombre' : document.getElementById("nombre").value = padre.childNodes[1].textContent,
        'apellido' : document.getElementById("nombre").value = padre.childNodes[2].textContent,
        'telefono' : document.getElementById("nombre").value = padre.childNodes[3].textContent,
        'correo' : document.getElementById("nombre").value = padre.childNodes[4].textContent,        
    } 
    })
    .then(res=>console.log(res.data))
    .catch(err => console.log(err))
}); */


    
   
