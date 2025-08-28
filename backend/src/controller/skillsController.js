const { getSkillsFromGithub, normalizeSkills } = require("../service/skills");

async function getSkills(req, res) {
    try {
        const { username } = req.params;
        const totals = await getSkillsFromGithub(username);
        const skills = normalizeSkills(totals);
        res.json(skills);
    } catch (err) {
        console.error("❌ Error en getSkills:", err);
        res.status(500).json({ error: "Error al obtener habilidades" });
    }
}

module.exports = { getSkills };