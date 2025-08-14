// src/app.js
const express = require('express');
const morgan = require('morgan');
const config = require('./config/config');
const clienteRouter = require('./router/router'); // tu router de proyectos

const app = express();

// Middleware para parsear JSON y datos en URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger de peticiones
app.use(morgan('dev'));

// Configuración del puerto
app.set('port', config.app.port || 4000);
app.use("/api/projects", clienteRouter);
console.log("Ruta /api/projects registrada");

// Rutas
// app.use("/api/projects", clienteRouter);
// 
// Ruta raíz para probar que el servidor funciona
app.get('/', (req, res) => {
    res.send('Servidor funcionando 🚀');
});

module.exports = app;
