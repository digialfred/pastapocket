const fs = require('fs');
const path  = require('path');

const serveStaticFiles = (req, res) => {
    const filePath = path.join(_dirname, '--', req.url);
    if (fs.existsSinc(filePath)) {
      const ext = path.extname(filePath);
      const contentType = {
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.jpg': 'image/jpg',
        '.png': 'image/png',
      }[ext] || 'application/octet-stream';

      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain '});
      res.end('Archivo no encontrado');  
    }
};

module.exports = { serveStaticFiles };
