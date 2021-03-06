const Proyectos = require('../models/Proyectos');
const slug = require('slug');

function principal(req, res) {
    res.render('principal.pug', { titulo: 'Pagina Principal', variable01: 'Variable 01' });
}

function nosotros(req, res) {
    res.render('nosotros.pug', { titulo: 'Pagina Nosotros', variable01: 'Variable 01' });
}

function nuevo_proyecto(req, res) {
    res.render('nuevo_proyecto.pug', { titulo: 'Nuevo proyecto', variable01: 'Variable 01' });
}

function detail_proyecto(req, res) {
    let url = req.params.url;
    res.status(200).json({ x1: url });
}

async function nuevo_proyecto_alta(req, res) {
    const { nombre } = req.body;
    // console.log(req.body);
    // res.status(200).json({mensaje:"formulario enviado"})
    let errores = [];
    if (!nombre) {
        errores.push({ 'texto': 'Necesario indicar nombre al Proyecto' });
    }
    if (errores.length > 0) {
        res.render('nuevo_proyecto.pug', { nombrePagina: 'Nuevo Proyecto', errores });

    } else {

        const proyecto = await Proyectos.create({ nombre });
        res.redirect('/');
    }

}

async function all_proyecto(req, res) {
    const proyectos = await Proyectos.findAll();
    res.render('all_proyecto.pug', { nombrePagina: 'Todos Proyecto', proyectos });

}

module.exports = { principal, nosotros, nuevo_proyecto, nuevo_proyecto_alta, all_proyecto, detail_proyecto };