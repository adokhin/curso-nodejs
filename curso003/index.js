const fs = require('fs');

//escribimos en un fichero el texto 'linea uno' y enviamos una funcion
//callback para saber si se crea o no correctamente
//este parrafo se ejecuta asincronamente al no haber una asignación y tener
//un callback para la respuesta
fs.writeFile('./texto.txt', 'linea uno', function(err){
    if(err){
        console.log(err);
    }else{
        console.log('fichero creado correctamente');
    }
} );

//Esta linea se escribe antes que el parrafo anterior asincrono
console.log('Ultima linea de codigo');


//Ahora probamos a leer el archivo
fs.readFile('./texto.txt',function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});
