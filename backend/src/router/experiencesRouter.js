const express = require('express');
const router = express.Router();
const experienceController = require('../controller/experienController');

// Endpoints de clientes
router.get('/', experienceController.getExperience);        // GET /clientes
router.get('/:id', experienceController.getExperienceById);  // GET /clientes/:id
router.post('/', experienceController.createExperience);     // POST /clientes
router.put('/', experienceController.updateExperience);      // PUT /clientes
router.delete('/:id', experienceController.deleteExperience); // DELETE /clientes/:id

module.exports = router;
