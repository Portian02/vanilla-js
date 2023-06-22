// 1. Escribir un código que modifique el HTML y cada segundo muestre la hora en un elemento de HTML.

// Inserte el código aquí

let time = document.querySelector("#Hora");

let digitalClock = (date) => {
  let hora = date.getHours();
  let minutos = date.getMinutes();
  let segundos = date.getSeconds();
  return hora + ":" + minutos + ":" + segundos;
};

const updateClock = () => {
  const date = new Date();
  const horaActual = digitalClock(date);
  time.textContent = horaActual;
};

updateClock();
setInterval(updateClock, 1000);

//1. Escribir una función llamada obtenerUsuarios utilizando promesas.
//    * En el package.json existe un script para levantar un servidor local. Ejecutelo y navegue a http://localhost:3000/users
//    * Utilizando la función Fetch, debe llamar al url http://localhost:3000/users y obtener la lista de usuarios.
//    * Una vez obtenga la lista de usuarios, imprimalos en la consola.
//    * Invoque la función para que se ejecute el llamado al servidor.
// Inserte el código aquí

obtenerListaUsuarios();
function obtenerListaUsuarios() {
  //hacer una función//

  fetch("http://localhost:3000/users")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      console.log("Lista de usuarios:", datos);
    })
    .catch((error) => {
      console.log("Error al obtener la lista de usuarios:", error);
    });

  function usuarios() {
    return new Promise(obtenerListaUsuarios);
  }
}

// 1. Escribir una función llamada obtenerUsuarios.
//    * Modificar la función para que utilice async/await
// Inserte el código aquí
async function datosUsuarios() {
  const datosdelUsuario = await obtenerListaUsuarios();
  console.log(datosdelUsuario);
}

datosUsuarios();
