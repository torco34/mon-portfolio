const express = require('express');
const router = express.Router();
const ProjectsController = require('../controller/projectsController');

// Rutas para Projects
router.get('/', ProjectsController.getProjects);          // Obtener todos
router.get('/:id', ProjectsController.getProjectById);    // Obtener por id
router.post('/', ProjectsController.createProject);       // Crear
router.put('/:id', ProjectsController.updateProject);     // Actualizar
router.delete('/:id', ProjectsController.deleteProject);  // Eliminar

module.exports = router;
