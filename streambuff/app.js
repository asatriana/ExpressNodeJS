const http = require('http');
const fs = require('fs');

const readStream = fs.createReadStream(__dirname + '/readme-text.txt', 'UTF-8');
const writeStream = fs.createWriteStream(__dirname+'/write-text.txt');

readStream.on('data',(chunk)=> {
    console.log('new data receive');
    console.log(chunk);
    writeStream.write(chunk);
});

// other ways by using pipe
// readStream.pipe(writeStream);