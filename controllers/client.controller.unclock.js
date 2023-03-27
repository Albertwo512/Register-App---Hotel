import { clienteServices } from "../service/cliente-services.js";

const crearNuevaLinea = (nombre,room,phone,id) => {
    const linea = document.createElement('tr');
    const contenido = `
            <td class="td" data-td>
            ${nombre}
            </td>
            <td>
            ${room}
            </td>
            <td>
            ${phone}
            </td>
            <td>
              <ul class="table__button-control">
              <li>
                  <a
                    href="../screens/detalles_cliente.html?id=${id}"
                    class="simple-button simple-button--edit2"
                    >Detalles</a
                  >
                <li>
                  <a href="../screens/editar_cliente.html?id=${id}"class="simple-button simple-button--edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                  </a>
                </li>
                <li>
                <a href="../screens/lista_cliente.html"class="simple-button simple-button--edit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-unlock-fill" viewBox="0 0 16 16">
                    <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"/>
                  </svg>
                  </a>
                  </li>
                <li>
                  <button 
                  class="simple-button simple-button--delete" type="button" id = "${id}">
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>
          `
          linea.innerHTML = contenido;
          const btn = linea.querySelector("button");
          btn.addEventListener("click",() => {
            const id = btn.id;
            clienteServices.eliminarCliente(id).then(respuesta => {
              console.log("respuesta")
            }).catch((error) => alert("Es de eliminar"));
          });
          return linea;
};

const table = document.querySelector("[data-table]")

clienteServices
  .listaClientes()
  .then((data) => {
    data.forEach(({ room,nombre,phone, id }) => {
      const nuevaLinea = crearNuevaLinea(room,nombre,phone,id);
      table.appendChild(nuevaLinea);
    });
  });
