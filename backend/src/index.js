// src/index.js
require('dotenv').config();
const app = require('./app');

app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')} 🚀`);
});
