const express = require('express');
const rutas = require('./routes/index');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();

//Donde cargar los archivos estaticos
app.use(express.static('public'));

const port = 3000;


// Ruta para el home
app.use('/',rutas.rutas);

// View engine = pug
app.set('view enegine', 'pug');
// Añadir carpeta de las vistas
app.set('views', path.join(__dirname,'./views'));

//habilitar bodyParser para leer datos formulario
app.use(bodyParser.urlencoded({extended:true}));


app.listen(port);
console.log('Servidor en PUERTO:' + port);