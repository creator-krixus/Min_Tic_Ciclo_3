function admin(){
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;


    if (name==="admin" && password==="admin") {              
        window.location.href = "../usersadmin.html";
    }
    else{
        window.location.href = "../dashboard.html";    
    }
    
    document.getElementById("name").value = " ";
    document.getElementById("password").value = " ";
}