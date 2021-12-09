const http = require('http');
const fs = require('fs');

// const readStream = fs.createReadStream(__dirname + '/index.html', 'UTF-8');

const server = http.createServer((req,res)=>{
    // res.writeHead(200,{'Content-type':'text/html'});
    // readStream.pipe(res);  

    // JSON format
    res.writeHead(200,{'Content-Type':'application/json'});
    console.log(req.url);
    const person = {
        name : 'Aries',
        email : 'mister@eduxtech.org',
        job : 'Developer'
    }

    res.end(JSON.stringify(person));
}); 

server.listen(3000,'127.0.0.1');