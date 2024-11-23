const http = require('http');
const { handleHome } = require('./routes/homeRoute');
const { handleFormulario } = require('./routes/formularioRoute');
const { handleRegister } = require('./routes/registrarRoute');
const { serveStaticFiles } = require('./utils/staticHandler');

const PORT = 3001;
const HOSTNAME = 'localhost';

-http.createServer(async (req, res) => {
    if (req.url === '/' && req.method === 'GET') {
      handleHome(req, res);
    } else if (req.url === '/formulario' && req.method === 'GET') {
      handleFormulario(req, res);
    }
      else if (req.url === '/register' && req.method === 'POST') {
      handleRegister(req, res);      
    
    } else if (req.url.startsWith('/public/asset/') && req.method === 'GET') {
      serveStaticFiles(req, res);  
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });  
      res.end( 'Pagina no encontrada');
    }
})
.listen(PORT, HOSTNAME, () => {
  console.log(`Servidor escuchando en http://${HOSTNAME}:${PORT}`);  
});