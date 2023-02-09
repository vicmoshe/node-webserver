const express = require('express');
const hbs = require('hbs');
require('dotenv').config();



const app = express();
const port = process.env.PORT;


// handle
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

//Middlewares
app.use( express.static('public'));

app.get('/',  (req, res) => {
    res.render('home',{
        nombre: 'Victor Manuel',
        titulo:'Curso de Node'
    });
  })

  app.get('/generic',  (req, res) => {
    res.render('generic',{
        nombre: 'Victor Manuel',
        titulo:'Curso de Node'
    });
  })




app.get('/generic',  (req, res) => {
    res.sendFile( __dirname + '/public/generic.html')
  })

  app.get('/elements',  (req, res) => {
    res.sendFile( __dirname + '/public/elements.html')
  })

 
  app.get('*',  (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
  })
  
// app.listen(8080)

app.listen( port, () =>{
console.log(`${ port }`)
})