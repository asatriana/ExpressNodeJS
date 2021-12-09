console.log("Hello World");
console.log('Were are in directory : '+__dirname);
console.log('Learning from : https://nodejs.org/dist/latest-v16.x/docs/api/globals.html');

let count = 0;
const timer = setInterval(() => {
    count = count +2;
    console.log(`${count} seconds have passed`);
    if (count> 6) {
            clearInterval(timer);
    }
}, 2000   );