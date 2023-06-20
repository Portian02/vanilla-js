let saludo = function() {
    console.log("Hola Mundo");
};

let salodoTodos = function () {
    console.log("Hola Todos")
    
}

function mostrarMensaje(fn1, fn2) {
    fn1();
    fn2();
}

mostrarMensaje(saludo, salodoTodos )




// var nombre = "Ana";

// function saludar() {
//   console.log(this.nombre);
// }
// saludar.apply({nombre:"Luis"}, []);

// class Persona{
//     nombre="";
//     constructor(nombre){
//         this.nombre = nombre;
//     }
//     saludo(){
//         console.log("Hola soy", this.nombre);
//     }
// }

// const persona1 = new Persona("María")
// // console.log(persona1)
// saludo.persona1()
