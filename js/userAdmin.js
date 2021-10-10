let url = "http://localhost:3000/Usuarios";
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    let body = ""
    for (let i = 0; i<data.length; i++){
        body += `<tr id="row" onclick="datos(this)"><td id="id">${data[i].id}</td><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td>${data[i].correo}</td><td>${data[i].telefono}</td><td><button id="editar"><a href="#miModal" id="btn-edit-data">Editar</a></button>  <button><a href="#modal-delete" id="btn-edit-data">Eliminar</a></button></td></tr>`        
    }        
    document.getElementById('data').innerHTML = body;
}    

let id;

function datos(x){
    id = x.cells[0].textContent;     

   document.getElementById("nombre").value =x.cells[1].textContent;
   document.getElementById("apellido").value = x.cells[2].textContent;
   document.getElementById("correo").value = x.cells[3].textContent;
   document.getElementById("telefono").value = x.cells[4].textContent; 
}

let guardar = document.getElementById("save");
guardar.addEventListener('click', function(){
    axios({
    method: 'POST',
    url:`http://localhost:3000/Usuarios/${id}`,
    data:  {
        'id' : id,
        'nombre' : document.getElementById("nombre").value,
        'apellido' : document.getElementById("apellido").value,
        'telefono' : document.getElementById("telefono").value,
        'correo' : document.getElementById("correo").value,
    } 
    })
    .then(res=>console.log(res.data))
    .catch(err => console.log(err))
    window.location.href = "../usersadmin.html"
});

/*
let eliminar = document.getElementById("confirmar");
eliminar.addEventListener('click', function(){     
    axios({
        method: 'DELETE',
        url:'http://localhost:3000/Usuarios',
        data:  {
            'id' : id            
        } 
        })
        .then(res=>console.log(res.data))
        .catch(err => console.log(err))
});

    
   */
