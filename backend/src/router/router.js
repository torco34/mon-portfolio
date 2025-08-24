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
router.post("/", async (req, res) => {
    try {
        const nuevoProyecto = await controller.insertPost(req.body);
        res.status(201).json(nuevoProyecto);
    } catch (err) {
        res.status(400).json({ error: err.message || "Error al insertar proyecto" });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const eliminado = await controller.deletePost(id);

        if (!eliminado) {
            return res.status(404).json({ error: "Proyecto no encontrado" });
        }

        res.json({ message: "Proyecto eliminado correctamente", eliminado });
    } catch (err) {
        res.status(500).json({ error: err.message || "Error al eliminar proyecto" });
    }
});

module.exports = router;
