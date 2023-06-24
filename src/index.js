let time = document.querySelector("#hour");
let fecha = document.querySelector("#date");

function digitalClock() {
  let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth() + 1,
    año = f.getFullYear(),
    diaSemana = f.getDay();

  dia = ("0" + dia).slice(-2);
  mes = ("0" + mes).slice(-2);

  let timeString = f.toLocaleTimeString();
  time.innerHTML = timeString;

  let semana = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let showSemana = semana[diaSemana];
  fecha.innerHTML = dia + "-" + mes + "-" + año + " " + showSemana;
}

setInterval(() => {
  digitalClock();
}, 1000);
