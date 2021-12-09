const fs = require('fs');

// fs.unlink('writeFileNew.txt',(err)=>{
    // console.log(err);
// });
// 
fs.mkdir('my-folder', ()=>{   
    fs.readFile('readme-text.txt','utf-8',function(error,data){
        fs.writeFile('./my-folder/WriteFileNew.txt',data, function(error){
            if (error){
                console.log(error);
            }
        }); 
    }); 
}); 

// fs.unlink('./my-folder/WriteFileNew.txt', () =>{
    // fs.rmdir('my-folder', (err)=>{
        // console.log('err');
    // });
// });