const coursesModel = require("../models/courseModels");

async function getCourses(req, res) {
    try {
        const data = await coursesModel.getAll();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener cursos" });
    }
}

async function getCourseById(req, res) {
    try {
        const { id } = req.params;
        const data = await coursesModel.getId(id);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener curso" });
    }
}

async function createCourse(req, res) {
    try {
        const newCourse = await coursesModel.insert(req.body);
        res.json(newCourse);
    } catch (err) {
        res.status(500).json({ error: "Error al crear curso" });
    }
}

async function updateCourse(req, res) {
    try {
        const updated = await coursesModel.update(req.body);
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: "Error al actualizar curso" });
    }
}

async function deleteCourse(req, res) {
    try {
        const { id } = req.params;
        await coursesModel.deleteId(id);
        res.json({ message: "Curso eliminado" });
    } catch (err) {
        res.status(500).json({ error: "Error al eliminar curso" });
    }
}

module.exports = {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};
