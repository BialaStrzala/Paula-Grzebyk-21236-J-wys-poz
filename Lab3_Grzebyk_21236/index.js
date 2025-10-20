console.log('Lab 3 zad 3');

const http = require('http');
var url = require('url');
const modul = require('./modulstrony');

const requestListener = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    //res.end(modul.glowna());
    
    switch(req.url){
        case '/about':
            res.end(modul.about());
            break;
        case '/contact':
            res.end(modul.contact());
            break;
        default:
            res.end(modul.glowna());
            break;
    }
    
}

const server = http.createServer(requestListener).listen(8000, "127.0.0.1");