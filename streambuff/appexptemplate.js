const express = require('express');

const app = express();
app.set('view engine','ejs');

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
    const data = {age : 30 , job : 'developer', friend : ['Sarah','Angelo','Richard']};
    res.render('profile' , {person : req.params.nama , data});
});

app.listen(3000);