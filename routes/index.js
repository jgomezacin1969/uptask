const express = require('express');
const rutas = express.Router();

const gralControl = require('../controlers/generalControler');
// importar express validator

const { body } = require('express-validator/check');


rutas.get('/', gralControl.principal);
rutas.get('/nosotros', gralControl.nosotros);
rutas.get('/nuevo_proyecto', gralControl.nuevo_proyecto);
rutas.get('/all_proyecto', gralControl.all_proyecto);
rutas.get('/proyecto/:url', gralControl.detail_proyecto);

rutas.post('/nuevo_proyecto',
    body('nombre').not().isEmpty().trim().escape(),
    gralControl.nuevo_proyecto_alta);
rutas.post('/formulario', (req, res) => { res.status(200).json({ valor: req.body }); });

module.exports = { rutas };