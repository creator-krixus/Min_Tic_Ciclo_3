let url = "http://localhost:3000/Usuarios";
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (let i = 0; i<data.length; i++){
        body += `<tr><td>${data[i].id}</td><td>${data[i].nombre}</td><td>${data[i].correo}</td><td>${data[i].telefono}</td></tr>`
    }
    document.getElementById('data').innerHTML = body;
}    