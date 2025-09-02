const ProjectsModel = require('../models/projectsModels');

// Obtener todos los proyectos
async function getProjects(req, res) {
    try {
        const projects = await ProjectsModel.getAll();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Obtener un proyecto por id
async function getProjectById(req, res) {
    try {
        const { id } = req.params;
        const project = await ProjectsModel.getId(id);

        if (!project) {
            return res.status(404).json({ error: 'Proyecto no encontrado' });
        }

        res.json(project);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Crear un proyecto
async function createProject(req, res) {
    try {
        const nuevoProyecto = await ProjectsModel.insert(req.body);
        res.status(201).json(nuevoProyecto);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Actualizar un proyecto
async function updateProject(req, res) {
    try {
        const actualizado = await ProjectsModel.update(req.body);
        res.json(actualizado);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Eliminar un proyecto
async function deleteProject(req, res) {
    try {
        const { id } = req.params;
        await ProjectsModel.deleteId(id);
        res.json({ message: `Proyecto con id ${id} eliminado` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
};
