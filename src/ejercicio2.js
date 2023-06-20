class Contador {
  valor = 0;
  siguiente() {
    this.valor += 1;
  }
}
// Inserte el código aquí
const instancia = new Contador();
// console.log(instancia)

instancia.siguiente();
console.log(instancia);
instancia.siguiente();
console.log(instancia);

export { instancia };
