const express = require('express');
const controller = require('../controller/controller');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log("📩 Petición GET /api/projects recibida");
    try {
        const proyectos = await controller.getAll();
        console.log("📦 Datos desde MySQL:", proyectos);
        res.status(200).json(proyectos);
    } catch (err) {
        console.error('❌ Error en GET /projects:', err);
        res.status(500).json({ error: 'Error interno del servidor', detalle: err.message });
    }
});


module.exports = router;
