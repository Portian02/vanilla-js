// 1. Escribir un código que modifique el HTML y cada segundo muestre la hora en un elemento de HTML.

// Inserte el código aquí
let time = document.getElementById("#Hora");

let digitalClock = (date) => {
  let hora = date.getHours();
  let minutos = date.getMinutes();
  let segundo = date.getSeconds();

  console.log(hora + minutos + segundo);
  return hora + ":" + minutos + ":" + segundo;
};

const updateclock = () => {
  const date = new Date();
  const horaActual = getCurrentTime(date);
  time.textContent = horaActual;
};
updateclock();
setInterval(updateclock(), 1000);

//1. Escribir una función llamada obtenerUsuarios utilizando promesas.
//    * En el package.json existe un script para levantar un servidor local. Ejecutelo y navegue a http://localhost:3000/users
//    * Utilizando la función Fetch, debe llamar al url http://localhost:3000/users y obtener la lista de usuarios.
//    * Una vez obtenga la lista de usuarios, imprimalos en la consola.
//    * Invoque la función para que se ejecute el llamado al servidor.
const imprimirUsuarios = () => {
  const usuarios = obtenerUsuarios();
  usuarios
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error en respuesta");
      }
    })
    .then((usuarios) => {
      console.log(usuarios);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Inserte el código aquí

// 1. Escribir una función llamada obtenerUsuarios.
//    * Modificar la función para que utilice async/await
// Inserte el código aquí
