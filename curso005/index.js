//Creamos ahora servidor http usando express
//Instalar el paquete previamente con: npm i express
const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function(req, res){
    res.send('<h1>Hola Mundo con Express y Nodejs</h1>');
    res.end();
});

//Podemos escribir también así
//server.listen(3000, ()=> {
server.listen(3000, function(){
    console.log('Servidor creado en puerto 3000'.red);
});
