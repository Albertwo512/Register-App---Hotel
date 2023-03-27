import { clienteServices } from "../service/cliente-services.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit",(evento) => {
    evento.preventDefault();
    const fechaIn = document.querySelector("[data-fechaIn]").value;
    const fechaOut = document.querySelector("[data-fechaOut]").value;
    const pago = document.querySelector("[data-pago]").value;
    const atendio = document.querySelector("[data-atendio]").value;
    const entrega = document.querySelector("[data-entrega]").value;
    const detalle = document.querySelector("[data-detalle]").value;

    clienteServices.crearCliente(fechaIn,fechaOut,pago,atendio,entrega,detalle).then(() => {
        window.location.href = "/screens/registro_completado.html";
    })

});