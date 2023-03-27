
// CRUD  - Metodos HTTP
// Create - POST
// Read  - GET
// Uptdate - PUT/PATCH
// Delete - DELETE

const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());


const crearCliente = (room,nombre,phone,email,pais,city,placas,clave,factura,datosFactura,FechaOb,fechaOut,pago,atendio,entrega,detalle) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({room,nombre,phone,email,pais,city,placas,clave,factura,datosFactura,FechaOb,fechaOut,pago,atendio,entrega,detalle,id: uuid.v4()})
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE"
  })
};

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => respuesta.json())
};

const actualizarCliente = (nombre,room,email,phone,city,id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({nombre,room,email,phone,city} )
  }).then(respuesta => console.log(respuesta)).catch(err => console.log(err));
}

export const clienteServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};

/*
const promise = new Promise( (resolve,reject) => {
  const http = new XMLHttpRequest();
http.open("GET", "http://localhost:3000/perfil" )

http.send();
http.onload = () => {
const response = JSON.parse(http.response);
if(http.status >= 400) {
  reject(response);
} else {
  resolve(response);
}
};
} );
return promise
*/