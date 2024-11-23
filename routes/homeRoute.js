const fs = require('fs-extra');
const handlebars = require('handlebars');

const plantillaHome = handlebars.compile(
    fs.readFileSync('./vistas/index.hbs', 'utf-8')
);
const handleHome = (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(plantillaHome());
};

module.exports = { handleHome };
