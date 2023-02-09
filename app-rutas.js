const express = require('express');
const app = express();
const port = 8080;

//Middlewares
app.use( express.static('public'));

app.get('/',  (req, res) => {
  res.send('Hello World')
})

app.get('/intervencion',  (req, res) => {
    res.send('Poder Judicial')
  })
  

  app.get('*',  (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
  })
  
// app.listen(8080)

app.listen( port, () =>{
console.log(`${ port }`)
})