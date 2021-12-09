const fs = require('fs');

// const text = fs.readFileSync('readme-text.txt','utf-8');
// console.log(text);
// fs.writeFileSync('writeText.txt','Disimpan '+text);


fs.readFile('readme-text.txt','utf-8',function(error,data){
    fs.writeFile('WriteFileNew.txt',data, function(error){
        if (error){
            console.log(error);
        }
    }); 
});