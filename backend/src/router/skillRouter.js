// skillRouter.js
const express = require("express");
const router = express.Router();
const skillsController = require("../controller/skillsController.js");

// Aquí las rutas deben ser relativas a /api/skills
router.get("/", skillsController.getSkills);
router.get("/:id", skillsController.getSkillById);
router.post("/", skillsController.createSkill);
router.put("/:id", skillsController.updateSkill);
router.delete("/:id", skillsController.deleteSkill);

module.exports = router;
