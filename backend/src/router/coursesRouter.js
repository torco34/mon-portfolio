// src/router/coursesRouter.js
const express = require('express');
const router = express.Router();
const CoursesController = require('../controller/coursesController');

// Rutas para Courses
router.get('/', CoursesController.getCourses);          // Obtener todos
router.get('/:id', CoursesController.getCourseById);    // Obtener por id
router.post('/', CoursesController.createCourse);       // Crear
router.put('/:id', CoursesController.updateCourse);     // Actualizar
router.delete('/:id', CoursesController.deleteCourse);  // Eliminar

module.exports = router;
