const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if (req.url == '/home'|| req.url =='/'){
        res.writeHead(200,{'Content-type':'text/html'});
        const readStream = fs.createReadStream(__dirname + '/index.html', 'UTF-8');
        readStream.pipe(res);
    } else if (req.url == '/aboutUs'){
        res.writeHead(200,{'Content-type':'text/html'});
        fs.createReadStream(__dirname + '/about.html', 'UTF-8').pipe(res);
    } else {
        res.writeHead(200,{'Content-type':'text/html'});
        fs.createReadStream(__dirname + '/404.html', 'UTF-8').pipe(res);
    }
    
}); 

server.listen(3000,'127.0.0.1');