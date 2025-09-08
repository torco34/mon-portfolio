const skillsCache = require("../models/skillsCache");

async function getSkillsWithCache(username) {
    const cache = await skillsCache.findByUsername(username);

    if (cache) {
        console.log("✅ Usando cache de skills");

        let skills;
        // 👇 Verifica si es string antes de parsear
        if (typeof cache.data === "string") {
            skills = JSON.parse(cache.data);
        } else {
            skills = cache.data; // ya es objeto
        }

        return skills;
    }

    console.log("🌐 Llamando a GitHub API...");
    // aquí llamas a GitHub y luego guardas en cache
    const githubSkills = await fetchFromGitHub(username);
    await skillsCache.createOrUpdate(username, githubSkills);

    return githubSkills;
}

module.exports = { getSkillsWithCache };
