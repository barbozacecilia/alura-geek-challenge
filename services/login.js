//LOGIN

function login(){
    const email = document.getElementById("email").value
    const pass = document.getElementById("pass").value

    if(email == "test@test.com" && pass== "test123"){
        window.location= "edit-products.html"
        alert("Datos ok")
    }else{
        alert("Datos incorrectos")
        console.log("todo-no-ok")
    }

}