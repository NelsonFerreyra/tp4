 //Escribir un programa que le pida al usuario que ingrese su nombre apellido edad y muestre un objeto con los datos ingresados.

 const readlineSync = require("./utilidades/node_modules/readline-sync") ;

 const nombre = readlineSync.question ("nombre :" ) ;
 const apellido = readlineSync.question( "apellido :") ;
 const edad = readlineSync.question("edad :") ;

 const datos = {nombre,apellido,edad} ;

 console.log(datos) ;