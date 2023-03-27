import { clienteServices } from "../service/cliente-services.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        window.location.href ="/screens/error.html";
    }

    const nombre = document.querySelector("[data-nombre]");
    const room = document.querySelector("[data-room]");
    const email = document.querySelector("[data-email]");
    const phone = document.querySelector("[data-phone]");
    const city = document.querySelector("[data-city]");

    const perfil = await clienteServices.detalleCliente(id);

    console.log(nombre,room,email,phone,city)
    nombre.value = perfil.nombre;
    room.value = perfil.room;
    email.value = perfil.email;
    phone.value = perfil.phone;
    city.value = perfil.city;
};

obtenerInformacion();

formulario.addEventListener("submit",(evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const room = document.querySelector("[data-room]").value;
    const email = document.querySelector("[data-email]").value;
    const phone = document.querySelector("[data-phone]").value;
    const city = document.querySelector("[data-city]").value;
    const fechaIn = document.querySelector("[data-fechaIn]").value;
    const fechaOut = document.querySelector("[data-fechaOut]").value;
    const pago = document.querySelector("[data-pago]").value;
    const entrega = document.querySelector("[data-entrega]").value;
    const detalle = document.querySelector("[data-detalle]").value;

    console.log(nombre,room,email,phone,city);
    clienteServices.actualizarCliente(nombre,room,email,phone,city,id,fechaIn,fechaOut,pago,entrega,detalle).then(() => {
        window.location.href = "/screens/edicion_concluida.html";
    });
});
