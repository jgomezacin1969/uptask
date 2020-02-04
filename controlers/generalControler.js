
function principal(req,res){
    res.render('principal.pug',{titulo:'Pagina Principal', variable01:'Variable 01'})
};

function nosotros(req,res){
    res.render('nosotros.pug',{titulo:'Pagina Nosotros', variable01:'Variable 01'})
};

function nuevo_proyecto(req,res){
    res.render('nuevo_proyecto.pug',{titulo:'Nuevo proyecto', variable01:'Variable 01'})
};

function nuevo_proyecto_alta(req,res){
    let params = req.body;
    res.status(200).json({mensaje:"formulario enviado"})
};

module.exports = {principal,nosotros, nuevo_proyecto, nuevo_proyecto_alta};