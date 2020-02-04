const express = require('express');
const rutas = express.Router();

const gralControl = require('../controlers/generalControler');



rutas.get('/', gralControl.principal);
rutas.get('/nosotros', gralControl.nosotros);
rutas.get('/nuevo_proyecto', gralControl.nuevo_proyecto);

module.exports = {rutas};
