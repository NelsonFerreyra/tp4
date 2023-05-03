 //Escribir una función que espere dos parámetros, uno de los cuales deberá ser un arreglo, y el otro parámetro debe ser el elemento a buscar en el arreglo. Si lo encuentra debera devoler "Elemento encontrado en la posicion (posicion)".
 const miLista1 = [4, "NELSON", "Jarra"];
 const miLista2 = ["Leche", "Café", "Chocolate"];


 function buscarElemento(array, elemento) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
        return "Elemento encontrado en la posición ${i}";
      }
    }
    return"elemento no enocntrado en el array"
  }
  


console.log(miLista1, "nelson"); // "Elemento encontrado en la posición 2"
console.log(miLista2, "cafe"); //"elemento encontrado en la posicion 1"