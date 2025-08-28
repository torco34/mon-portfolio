
// const express = require("express");
// const { getSkillsFromGithub, normalizeSkills } = require("../service/skills");

// const router = express.Router();

// /**
//  * GET /api/skills/:username
//  * Devuelve los lenguajes y porcentajes de un usuario de GitHub
//  */
// router.get("/:username", async (req, res) => {
//     try {
//         const { username } = req.params;
//         const totals = await getSkillsFromGithub(username);
//         const skills = normalizeSkills(totals);
//         res.json(skills);
//     } catch (err) {
//         console.error("Error en /api/skills:", err);
//         res.status(500).json({ error: "Error al obtener habilidades" });
//     }
// });

// module.exports = router;
// backend/src/routes/skills.js