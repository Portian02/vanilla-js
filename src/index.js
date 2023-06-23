function sumar(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function dividir(a, b) {
  return a / b;
}

function multiplicar(a, b) {
  return a * b;
}

function esPar(numeros) {
    
  const evenNumbers = numeros.filter((numero) => numero % 2 === 0);
    // console.log(evenNumbers);
    return evenNumbers;
}
// esPar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// esPar([2,4,5,7,8,9,3,5])

function diviciblex5(numeros) {
    
    const evenNumbers = numeros.filter((numero) => numero % 5 === 0);
       console.log(evenNumbers);
      return evenNumbers;
  }
// diviciblex5([1,5,10,12,20,35,9])
export { sumar, resta, dividir, multiplicar, esPar, diviciblex5 };

