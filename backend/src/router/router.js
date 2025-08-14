const express = require('express');
const controller = require('../controller/controller');

const router = express.Router();

// GET /api/projects
router.get('/', async (req, res) => {
    try {
        const proyectos = await controller.getAll();
        console.log("📦 Datos desde MySQL:", proyectos);
        res.status(200).json(proyectos); // ✅ respondemos con los datos
    } catch (err) {
        console.error('❌ Error en GET /projects:', err);
        res.status(500).json({ error: 'Error interno del servidor' }); // ✅ error controlado
    }
});

module.exports = router;