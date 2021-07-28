//Primera forma de exportar un modulo
//Simplemente al final exportamos las propiedades que queramos
//con exports.nombre_propiedad
function add(x1,x2){
  return x1 + x2;
}

function substract(x1,x2){
  return x1 - x2;
}

function multiply(x1,x2){
  return x1 * x2;
}

function divide(x1,x2){
  if(x2 == 0){
    console.log("Error: No se puede dividir por cero")
  }else{
    return x1 / x2;
  }
}

//exports.nombre exporta solo una propiedad de un objeto
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
