import { clienteServices } from "../service/cliente-services.js";

const crearNuevaLinea = (nombre,room,phone,email,pais,city,placas,clave,factura,datosFactura,FechaOb,fechaOut,pago,atendio,entrega,detalle) => {
    
    const linea = document.createElement('tr');
    const contenido = `
            <td  data-td>
            ${nombre}
            </td>
            <td>
            ${room}
            </td>
            <td>
            ${phone}
            </td>
            <td>
            ${email}
            </td>
            <td>
            ${pais}
            </td>
            <td>
            ${city}
            </td>
            <td>
            ${placas}
            </td>
            <td>
            ${clave}
            </td>
            <td>
            ${factura}
            </td>
            <td>
            ${datosFactura}
            </td>
            <td>
            ${FechaOb}
            </td>
            <td>
            ${fechaOut}
            </td>
            <td>
            ${pago}
            </td>
            <td>
            ${atendio}
            </td>
            <td>
            ${entrega}
            </td>
            <td>
            ${detalle}
            </td>
          `
          linea.innerHTML = contenido;
          return linea;
};

const table = document.querySelector("[data-table]")

clienteServices
  .listaClientes()
  .then((data) => {
    data.forEach(({ room,nombre,phone,email,pais,city,placas,clave,factura,datosFactura,FechaOb,fechaOut,pago,atendio,entrega,detalle,id }) => {
      const nuevaLinea = crearNuevaLinea(room,nombre,phone,email,pais,city,placas,clave,factura,datosFactura,FechaOb,fechaOut,pago,atendio,entrega,detalle,id);
      table.appendChild(nuevaLinea);
    });
  });