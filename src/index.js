// 2. Dentro del index.js importe la calculadora.
//    * Defina una función que se llame calcular:
//      * Recibe tres parametros (operacion, numero1, numero2)
//        * Dada la operación ejecuta la función expuesta en calculadora.js

// ### Ejemplos
// ```
//    calcular('sumar', 1, 2) // 3
//    calcular('dividir', 4, 2) // 2

// Inserte el código aquí

import { calculadora } from "./calculadora.js";

function calcular(operacion, n1, n2) {
  let resultado;
  if (operacion === "sumar") {
    resultado= calculadora.sumar(n1, n2);
    
  } else if (operacion === "restar") {
  resultado = calculadora.restar(n1, n2);

  } else if (operacion === "dividir") {
   resultado = calculadora.dividir(n1, n2);
   
  } else if (operacion === "multiplicar") {
   resultado = calculadora.multiplicar(n1, n2);
 
  }
  console.log(resultado);
  return resultado;
}


 calcular("restar", 10, 5);



