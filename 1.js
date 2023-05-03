// esribir una funcion para q se le pase una cadena de "nombre" y muestre por pantalla el saludo ¡hola nombre!

const readlineSync = require("./utilidades/node_modules/readline-sync") ;
const preguntaNombre = readlineSync.question (" ingrese nombre: ") ;

function saludo(){
    return("¡hola " + preguntaNombre+ "!")

}

console.log(saludo(preguntaNombre))

