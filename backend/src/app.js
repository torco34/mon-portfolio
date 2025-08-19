const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config/config');
const clienteRouter = require('./router/router');

const app = express();

// Middleware de logging manual
app.use((req, res, next) => {
    console.log("📥 Petición recibida:", req.method, req.url);
    next();
});

// Evitar cache para que no devuelva 304
app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    next();
});

// Parseo JSON y logs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Habilitar CORS
app.use(cors({ origin: "http://localhost:5173" })); // o "*" en desarrollo

// Puerto
app.set('port', config.app.port || 4000);

// Ruta de prueba
app.get("/ping", (req, res) => {
    res.send("pong 🏓");
});

// Rutas de proyectos
app.use("/api/projects", clienteRouter);

module.exports = app;
