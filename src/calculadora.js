// ### Ejercicios:
// 1. Defina un archivo llamado calculadora.js dentro de la carpeta src
//    * Exporte un objeto calculadora que tenga los siguientes métodos:
//      * Sumar, restar, dividir, multiplicar.

// SUMAR

function sumar(numero1, numero2) {
  return numero1 + numero2;
  
}
// RESTAR
function restar(numero1, numero2) {
  return numero1 - numero2;
}
//MULTIPLICAR
function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}
// DIVIDIR
function dividir(numero1, numero2) {
  return numero1 / numero2;
}
const calculadora = {
    sumar, restar, dividir, multiplicar
}
export { calculadora };


