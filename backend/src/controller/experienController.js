const experience = require('../models/experiencesModels');

async function getExperience(req, res) {
    try {
        const clientes = await experience.getAll();
        res.json(clientes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getExperienceById(req, res) {
    try {
        const { id } = req.params;
        const cliente = await experience.getId(id);

        if (!cliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

        res.json(cliente);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function createExperience(req, res) {
    try {
        const nuevoCliente = await experience.insert(req.body);
        res.status(201).json(nuevoCliente);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function updateExperience(req, res) {
    try {
        const actualizado = await experience.update(req.body);
        res.json(actualizado);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function deleteExperience(req, res) {
    try {
        const { id } = req.params;
        await experience.deleteId(id);
        res.json({ message: `Cliente con id ${id} eliminado` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { getExperience, getExperienceById, createExperience, updateExperience, deleteExperience };
