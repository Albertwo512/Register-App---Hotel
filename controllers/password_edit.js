const password = document.querySelector("#password");
const btnPass2 = document.querySelector("#pass2");


    btnPass2.addEventListener("click",() => {
        if(password.value == "12345") {
            window.location.href = "/screens/lista_cliente_unlocked.html";
        } if(password.value == "") {
            alert("Ingresa la Contraseña");
        } else {
        }
        });