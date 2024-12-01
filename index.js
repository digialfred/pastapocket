const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Definir rutas para cada página
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'carrito.html'));
});

app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});

app.get('/nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'nosotros.html'));
});

app.get('/promociones', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'promociones.html'));
});

app.get('/sesion', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sesion.html'));
});

app.get('/ubicacion', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ubicacion.html'));
});

// Manejar rutas no definidas (404)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
