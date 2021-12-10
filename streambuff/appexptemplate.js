const express = require('express');
const bodyParser = require ('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended : false});

app.set('view engine','ejs');
app.use('/assets', express.static('assets')); // http://localhost:3000/assets/styles.css

app.get('/',(req,res) =>{
    res.render('index');
});


app.get('/about',(req,res) =>{ // add query string into about http://localhost:3000/about?job=developer&name=alex
    res.render('about', {qs : req.query}); // add query into views
});

app.post('/about',urlencodedParser , (req,res) => {
    console.log(req.body);
    res.render('about-success', {data : req.body});
});

app.get('/profiles/:id',(req,res) =>{
    res.send('Profile Id: '+req.params.id);
});

app.get('/profile/:nama',(req,res) =>{
    const data = {age : 30 , job : 'developer', friend : ['Sarah','Angelo','Richard']};
    res.render('profile' , {person : req.params.nama , data});
});

app.listen(3000);