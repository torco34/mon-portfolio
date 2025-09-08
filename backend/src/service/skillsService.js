const skillsCache = require("../models/skillsCache");
const { fetchSkillsFromGithub } = require("./github");

async function getSkillsWithCache(username) {
    // Buscar en la cache
    const cached = await skillsCache.findByUsername(username);

    if (cached) {
        const updatedAt = new Date(cached.updated_at);
        const now = new Date();

        // diferencia en horas
        const hoursDiff = (now - updatedAt) / (1000 * 60 * 60);

        if (hoursDiff < 24) {
            console.log("✅ Usando cache de skills");

            // si `data` viene como string en MySQL → parseamos
            // si ya es objeto (algunas configuraciones de MySQL con JSON lo devuelven así) → lo usamos directo
            const skills = typeof cached.data === "string"
                ? JSON.parse(cached.data)
                : cached.data;

            return skills;
        }
    }

    // Si no hay cache o está viejo → pedimos a GitHub
    console.log("♻️ Actualizando skills desde GitHub");
    const skills = await fetchSkillsFromGithub(username);

    // Guardar en BD
    await skillsCache.createOrUpdate(username, skills);

    return skills;
}

module.exports = { getSkillsWithCache };
