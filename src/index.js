let time = document.querySelector("#hour");
let fecha = document.querySelector("#date");

let digitalClock = (date) => {
  let hora = date.getHours();
  let minutos = date.getMinutes();
  minutos = ("0" + minutos).slice(-2);
  let segundos = date.getSeconds();
  segundos = ("0" + segundos).slice(-2);
  let jornada = hora >= 12 ? 'PM':'AM'
  return hora + ":" + minutos + ":" + segundos + "  " + jornada;
};

const updateClock = () => {
  const date = new Date();
  const horaActual = digitalClock(date);
  time.textContent = horaActual;
};

// let fechaActual = (Date) => {
//   let dia = Date.getDate();
//   let mes = Date.getMonth() + 1;
//   let año = Date.getFullYear();
//   let
//   return dia + "/" + mes + "/" + año;
// };

// const updateDate = () => {
//   const date = new Date();
//   const fecha = updateClock(date);
//   fecha.textContent = fecha;
// };

setInterval(updateClock, 1000);
