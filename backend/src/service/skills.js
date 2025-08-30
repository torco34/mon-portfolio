const { fetchAllRepos, fetchRepoLanguages, fetchFileFromRepo } = require("./github");

const ALLOWED = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React",
    "Express",
    "Node.js",
    "MySQL"
];

/**
 * 🔹 Obtiene las skills de un usuario en GitHub
 * - Suma lenguajes por bytes
 * - Detecta frameworks desde package.json
 * - Agrega Node.js si corresponde
 * 
 * @param {string} username
 * @returns {Promise<Object>}
 */
async function getSkillsFromGithub(username) {
    const repos = await fetchAllRepos(username); 
    const skills = {};

    for (const repo of repos) {
        // 1. Obtener lenguajes directamente desde la API de GitHub
        try {
            const langs = await fetchRepoLanguages(username, repo.name);
            for (const [lang, bytes] of Object.entries(langs)) {
                skills[lang] = (skills[lang] || 0) + bytes;
            }
        } catch (e) {
            console.log(`⚠️ No se pudieron obtener lenguajes de ${repo.name}`);
        }

        // 2. Detectar frameworks desde package.json
        try {
            const packageJson = await fetchFileFromRepo(username, repo.name, "package.json");

            if (packageJson) {
                const deps = {
                    ...packageJson.dependencies,
                    ...packageJson.devDependencies
                };

                if (deps?.react) skills["React"] = (skills["React"] || 0) + 5000;
                if (deps?.express) skills["Express"] = (skills["Express"] || 0) + 5000;
                if (deps?.mysql) skills["MySQL"] = (skills["MySQL"] || 0) + 5000;
            }
        } catch (e) {
            console.log(`⚠️ No se pudo leer package.json de ${repo.name}`);
        }
    }

    // 3. Agregar Node.js si hay JS/TS y Express
    if ((skills["JavaScript"] || skills["TypeScript"]) && skills["Express"]) {
        skills["Node.js"] = (skills["Node.js"] || 0) + 5000;
    }

    // 4. 🔹 Filtrar solo tecnologías permitidas y con valor > 0
    const filtered = Object.fromEntries(
        Object.entries(skills).filter(([lang, val]) => ALLOWED.includes(lang) && val > 0)
    );

    return filtered;
}

/**
 * 🔹 Normaliza los skills en porcentajes
 * @param {Object} totals
 * @returns {Array<{ lang: string, percent: string }>}
 */
function normalizeSkills(totals) {
    const sum = Object.values(totals).reduce((a, b) => a + b, 0);
    if (sum === 0) return [];

    return Object.entries(totals)
        .map(([lang, val]) => ({
            lang,
            percent: ((val / sum) * 100).toFixed(1),
        }))
        .sort((a, b) => b.percent - a.percent);
}

module.exports = { getSkillsFromGithub, normalizeSkills };
