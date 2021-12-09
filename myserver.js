const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, {'COntent-type' : 'text/plain'});
    res.end('Hellow NodeJS');
});

console.log('port 3000');
server.listen(3000,'127.0.0.1')