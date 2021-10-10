function admin(){
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;


    if (name==="admin" && password==="admin") {              
        window.location.href = "http://127.0.0.1:5500/proyectoCiclo3/usersadmin.html";
    }
    else{
        if (name!=="" && password!=="") {
            window.location.href = "http://127.0.0.1:5500/proyectoCiclo3/dashboard.html";        
        }  
        else{
            alert("llenar los campos");
        }      
    }
    
    document.getElementById("name").value = "";
    document.getElementById("password").value = "";
}