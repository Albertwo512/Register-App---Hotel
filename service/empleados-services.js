const listaEmpleados = () => fetch("http://localhost:3000/empleados").then((respuesta) => respuesta.json());
    console.log(listaEmpleados);

/*
const nombreEmployeed = (nombreEmpleado) => {
  return fetch(`http://localhost:3000/perfil/${nombreEmpleado}`).then(respuesta => respuesta.json());
};
/*
const actualizarCliente = (nombre,email,phone,city,id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({nombre,email,phone,city} )
  }).then(respuesta => console.log(respuesta)).catch(err => console.log(err));
}

export const empleadosServices = {
  detalleCliente,
  actualizarCliente,
};
*/