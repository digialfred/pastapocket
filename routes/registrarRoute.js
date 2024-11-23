const { guardaCaso, leerCasos } = require('../controllers/casosControllers');
const handlebars = require('handlebars');
const fs = require('fs-extra');

const plantillaListado = handlebars.compile(
    fs.readFileSync('./vistas/listado.hbs', 'utf-8')
);

const handleRegister = (req, res) => {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', async () => {
        const datos = new URLSearchParams(body);

        const nuevoCaso = {
            propietario: datos.get('propietario'),
            marca: datos.get('marca'),
            tipo: datos.get('tipo'),
            problema: datos.get('problema'),
        };

        await guardarCaso(nuevoCaso);

        const casos = await leerCasos();
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end(plantillaListado({ casos }));
    });
};

module.experts = { handleRegister };
