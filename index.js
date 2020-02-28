const express = require('express');
const rutas = require('./routes/index');
const path = require('path');
const bodyParser = require("body-parser");
const db = require('./config/db');
const helpers = require('./helpers');

db.authenticate()
    .then(() => { console.log('BBDD activa'); })
    .catch((error) => console.log('Error BBDD:', error));

require('./models/Proyectos');
db.sync();

const app = express();

//Donde cargar los archivos estaticos
app.use(express.static('public'));

const port = 3000;



// View engine = pug
app.set('view enegine', 'pug');
// Añadir carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// pasar vardump a res
app.use((req, res, next) => {
    res.locals.year = 2020;
    res.locals.vardump = helpers.vardump;
    next();
});

//aprendiendo middleware
app.use((resq, res, next) => {
    console.log('Yo soy Middleware');
    next();
});

//aprendiendo middleware
app.use((resq, res, next) => {
    console.log('Yo soy OTRO Middleware');
    next();
});

//habilitar bodyParser para leer datos formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para el home
app.use('/', rutas.rutas);

// 
app.listen(port);
console.log('Servidor en PUERTO:' + port);