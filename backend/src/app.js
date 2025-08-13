const express = require('express');
const cors = require('cors');

const app = express();

// Configuración
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor funcionando 🚀');
});

module.exports = app;
