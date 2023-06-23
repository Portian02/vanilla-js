import { sumar, resta, dividir, multiplicar, esPar, diviciblex5 } from "../src/index.js";
// SUMA 
describe("suma", () => {
  test("suma 1 + 2 es 3", () => {
    expect(sumar(1, 2)).toBe(3);
  });
  test("suma 6 + 6 es 12", () => {
    expect(sumar(6, 6)).toBe(12);
  });
});
// RESTA 
describe("resta", () => {
  test("resta 3 - 2 es 1", () => {
    expect(resta(3, 2)).toBe(1);
  });
  test("resta 6 - 6 es 0", () => {
    expect(resta(6, 6)).toBe(0);
  });
});
// DIVISIÓN 
describe("división", () => {
  test("división 10 / 2 es 5", () => {
    expect(dividir(10, 2)).toBe(5);
  });
  test("división 6 / 6 es 1", () => {
    expect(dividir(6, 6)).toBe(1);
  });
});
// MULTIPLICACIÓN 
describe("multiplicacion", () => {
  test("multiplicacion 10 * 2 es 20", () => {
    expect(multiplicar(10, 2)).toBe(20);
  });
  test("multiplicacion 6 * 6 es 36", () => {
    expect(multiplicar(6, 6)).toBe(36);
  });
});
// FILTROS
describe("filtro", () => {
  test("filtrar pares de lista [1, 2, 3, 4, 5, 6, 7, 8, 9] = números pares [2, 4, 6, 8]", () => {
    expect(esPar([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([2, 4, 6, 8]);
  });
});
// DIVISIBLE 
describe("filtro divisores por 5", () => {
    test("filtrar numeros divisibles por 5 de lista [2,5,4,25,16,125] = números pares [5,25,125]", () => {
      expect(diviciblex5([2,5,4,25,16,125])).toStrictEqual([5,25,125]);
    });
  });