const SkillsModel = require('../models/skillsModels');

// Obtener todas las skills
async function getSkills(req, res) {
    try {
        const skills = await SkillsModel.getAll();
        res.json(skills);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Obtener skill por id o por lang
async function getSkillById(req, res) {
    try {
        const { id } = req.params;

        let skill;
        if (isNaN(id)) {
            // Si no es número, buscar por lang
            skill = await SkillsModel.getByLang(id);
        } else {
            // Si es número, buscar por id
            skill = await SkillsModel.getId(id);
        }

        if (!skill) return res.status(404).json({ error: 'Skill no encontrada' });
        res.json(skill);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Crear skill
async function createSkill(req, res) {
    try {
        const nuevaSkill = await SkillsModel.insert(req.body);
        res.status(201).json(nuevaSkill);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Actualizar skill
// Actualizar skill
async function updateSkill(req, res) {
    try {
        const { id } = req.params;
        const actualizada = await SkillsModel.update(id, req.body);
        res.json(actualizada);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Eliminar skill
async function deleteSkill(req, res) {
    try {
        const { id } = req.params;
        await SkillsModel.deleteId(id);
        res.json({ message: `Skill con id ${id} eliminada` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getSkills,
    getSkillById,
    createSkill,
    updateSkill,
    deleteSkill
};
