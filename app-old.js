const http = require('http');


http.createServer( (req, res) =>{

    // console.log(req);
//Ejercicio 1
    //  res.writeHead(200,  {'Content-Type': 'application/json'});

    //  const persona={
    //     id: 1,
    //     nombre: 'victor'
    // }

    // res.write( JSON.stringify( persona) );
    // res.end();

//Ejercicio 2

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200,  {'Content-Type': 'application/csv'});

    // res.write('id, nombre\n');
    // res.write('1, Victor\n');
    // res.write('2, Manuel\n');
    // res.write('3, Juan\n');
    // res.write('4, Pedro\n');
    // res.end();

//Ejercicio 3

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200,  {'Content-Type': 'application/csv'});

    res.write('Hola Mundo ');
    res.end();


})

.listen( 8080 ) ;

console.log('Escuchando en el puerto ', 8080)