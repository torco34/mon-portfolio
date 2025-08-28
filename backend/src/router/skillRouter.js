
const express = require("express");
const { getSkills } = require("../controller/skillsController");

const router = express.Router();

// GET /api/skills/:username
router.get("/:username", getSkills);

module.exports = router;
