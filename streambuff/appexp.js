const express = require('express');

const app = express();

app.get('/',(req,res) =>{
    res.sendFile(__dirname+'/index.html');
});


app.get('/about',(req,res) =>{
    res.send('About Page');
});

app.get('/profiles/:id',(req,res) =>{
    res.send('Profile Id: '+req.params.id);
});

app.get('/profile/:nama',(req,res) =>{
    res.send('Profile Name: '+req.params.nama);
});

app.listen(3000);