const password = document.querySelector("#password");
const btnPass = document.querySelector("#pass");
const btnPass2 = document.querySelector("#pass2");

console.log(password);
console.log(btnPass);

btnPass.addEventListener("click",() => {
    if(password.value == "12345") {
        window.location.href = "/screens/lista_cliente.html";
    } if(password.value == "") {
        alert("Ingresa la Contraseña");
    } else {
    }
    });

    btnPass2.addEventListener("click",() => {
        if(password.value == "12345") {
            window.location.href = "/screens/lista_cliente_unlocked.html";
        } if(password.value == "") {
            alert("Ingresa la Contraseña");
        } else {
        }
        });