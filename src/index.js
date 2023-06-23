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