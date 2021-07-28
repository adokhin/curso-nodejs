const http = require('http');

const colors = require('colors');

/*
http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    //res.writeHead(404, {'Content-type': 'text/plain'});
    res.write('<h1>Hola mundo desde Nodejs</h1>');
    res.end();
}).listen(3000);
*/

//Otra forma más sofisticada de hacerlo
const handleServer = function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    //res.writeHead(404, {'Content-type': 'text/plain'});
    res.write('<h1>Hola mundo</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Servidor iniciado en puerto 3000'.underline.yellow);
});
