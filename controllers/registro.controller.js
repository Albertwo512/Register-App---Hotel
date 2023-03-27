import { clienteServices } from "../service/cliente-services.js";

const formulario = document.querySelector("[data-form]");


formulario.addEventListener("submit",(evento) => {
    evento.preventDefault();
    const room = document.querySelector("[data-room]").value
    const nombre = document.querySelector("[data-nombre]").value;
    const phone = document.querySelector("[data-phone]").value;
    const email = document.querySelector("[data-email]").value;
    const pais = document.querySelector("[data-pais]").value;
    const city = document.querySelector("[data-city]").value;
    const placas = document.querySelector("[data-placas]").value;
    const clave = document.querySelector("[data-clave]").value;
    const factura = document.querySelector("[data-factura]").value;
    const datosFactura = document.querySelector("[data-datosFactura]").value

    const fechaIn = document.querySelector("[data-fechaIn]").value;
    const fechaOut = document.querySelector("[data-fechaOut]").value;
    const pago = document.querySelector("[data-pago]").value;
    const atendio = document.querySelector("[data-atendio]").value;
    const entrega = document.querySelector("[data-entrega]").value;
    const detalle = document.querySelector("[data-detalle]").value;

    clienteServices.crearCliente(room,nombre,phone,email,pais,city,placas,clave,factura,datosFactura,FechaOb,fechaOut,pago,atendio,entrega,detalle).then(() => {
        window.location.href = "/screens/registro_completado.html";
    }).catch(err => console.log(err));
});