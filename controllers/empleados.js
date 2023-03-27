var nombreEmpleado = document.querySelector(".nombreEmpleado");
const sesionNombre = document.querySelector("#sesionNombre");
const sesionPassword = document.querySelector("#sesionPassword");
const btnLogin = document.querySelector("#login");

btnLogin.addEventListener("click",() => {
    if(sesionNombre.value === "qw" && sesionPassword.value === "12" ) {
        
        console.log(sesionNombre.value);
        window.location.href = "/screens/index.html"

    }else {
        console.log("no sirve");
    }
    });

    nombreEmpleado = "Melissa";



