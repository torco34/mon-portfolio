const { fetchAllRepos, fetchRepoLanguages, fetchFileFromRepo } = require("./github");

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
    const repos = await fetchAllRepos(username); // 🔹 ahora devuelve objetos completos
    const skills = {};

    for (const repo of repos) {
        // 1. Obtener lenguajes
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

            if (packageJson && packageJson.dependencies) {
                const deps = packageJson.dependencies;

                if (deps.react) skills["React"] = (skills["React"] || 0) + 1;
                if (deps.next) skills["Next.js"] = (skills["Next.js"] || 0) + 1;
                if (deps.express) skills["Express"] = (skills["Express"] || 0) + 1;
            }

            if (packageJson && packageJson.devDependencies) {
                const devDeps = packageJson.devDependencies;

                if (devDeps.react) skills["React"] = (skills["React"] || 0) + 1;
                if (devDeps.next) skills["Next.js"] = (skills["Next.js"] || 0) + 1;
                if (devDeps.express) skills["Express"] = (skills["Express"] || 0) + 1;
            }
        } catch (e) {
            console.log(`⚠️ No se pudo leer package.json de ${repo.name}`);
        }
    }

    // 3. Agregar Node.js si hay JS/TS y Express
    if (skills["JavaScript"] || skills["TypeScript"]) {
        skills["Node.js"] = (skills["Node.js"] || 0) + 1;
    }

    return skills;
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
