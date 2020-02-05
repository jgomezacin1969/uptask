const express = require('express');
const rutas = express.Router();

const gralControl = require('../controlers/generalControler');



rutas.get('/', gralControl.principal);
rutas.get('/nosotros', gralControl.nosotros);
rutas.get('/nuevo_proyecto', gralControl.nuevo_proyecto);

rutas.post('/nuevo_proyecto', gralControl.nuevo_proyecto_alta);
rutas.post('/formulario', (req, res) => { res.status(200).json({ valor: req.body }); });

module.exports = { rutas };