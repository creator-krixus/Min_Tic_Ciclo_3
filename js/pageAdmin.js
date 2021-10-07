function admin(){
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;


    if (name==="admin" && password==="admin") {
        console.log("true");                
        location.href = "../usersadmin.html";
    }
    else{
        console.log("false");
        location.href = "../dashboard.html";    
    }
    
    document.getElementById("name").value = "";
    document.getElementById("password").value = "";
}