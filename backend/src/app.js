const express = require('express');
const morgan = require('morgan');
const config = require('./config/config');
const clienteRouter = require('./router/router');

const app = express();
app.use((req, res, next) => {
    console.log("📥 Petición recibida:", req.method, req.url);
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.set('port', config.app.port || 4000);
app.get("/ping", (req, res) => {
    res.send("pong 🏓");
});
app.use("/api/projects", clienteRouter);
// console.log("Ruta /api/projects registrada");

// app.get('/', (req, res) => {
//     res.send('Servidor funcionando 🚀');
// });

module.exports = app;
