const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

// esto es para heroku
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



//app.get('/', (req, res) => {
//    //res.send('Hola Mundo');
//    let salida = {
//        nombre: "Marcelo Aiello",
//        edad: 50,
//        url: req.url
//    };
//
//    res.send(salida);
//})
//

//app.get('/data', (req, res) => {
//    res.send('Hola Data');
//})

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'foca software',
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${ port }`);
});