const fs = require('fs-extra');
const handlebars = require('handlebars');

const plantillaFormulario = handlebars.compile(
    fs.readFileSync('./vistas/formulario.hbs', 'utf-8')
);

const handleFormulario = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'});
};

module.exports = { handleFormulario };
