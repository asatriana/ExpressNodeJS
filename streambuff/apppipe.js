const http = require('http');
const fs = require('fs');

const readStream = fs.createReadStream(__dirname + '/readme-text.txt', 'UTF-8');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'});
    readStream.pipe(res);  
}); 

server.listen(3000,'127.0.0.1');