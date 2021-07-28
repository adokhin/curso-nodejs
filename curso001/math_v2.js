//Segunda forma de exportar un modulos
//Primero creamos un objeto vacio y luego añadimos propiedades
//Despues exportamos con module.exports
const Math = {};

function add_v2(x1,x2){
  return x1 + x2;
}

function substract_v2(x1,x2){
  return x1 - x2;
}

function multiply_v2(x1,x2){
  return x1 * x2;
}

function divide_v2(x1,x2){
  if(x2 == 0){
    console.log("Error: No se puede dividir por cero")
  }else{
    return x1 / x2;
  }
}

//Es necesario crear el objeto Math antes
Math.add_v2 = add_v2;
Math.substract_v2 = substract_v2;
Math.multiply_v2 = multiply_v2;
Math.divide_v2 = divide_v2;

//module.exports permite exportar más cosas, funciones, constantes, modulos, etc
//exports.nombre exportaba solo una propiedad de un objeto
module.exports = Math;

//Si hacemos module.exports = nombre_funcion, solo se exporta la función
//No se envia un objeto sino solo una funcion
