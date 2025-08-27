// services/github.js
const fetch = require("node-fetch");

// Si quieres evitar límites de peticiones (rate limit) puedes usar un token de GitHub
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || null;

/**
 * 🔹 Obtiene todos los repositorios públicos de un usuario
 * @param {string} username - Nombre de usuario en GitHub
 * @returns {Promise<Array>} Lista de repositorios
 */
async function fetchAllRepos(username) {
  const headers = { "User-Agent": "skills-counter" };
  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  let page = 1;
  const repos = [];

  while (true) {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`,
      { headers }
    );

    if (!res.ok) {
      throw new Error(`Error al obtener repos de GitHub: ${res.status}`);
    }

    const data = await res.json();
    repos.push(...data);

    // GitHub devuelve máx. 100 por página. Si ya no hay más, cortamos.
    if (data.length < 100) break;

    page++;
  }

  // Filtramos para que NO aparezcan los repos que son fork
  return repos.filter(r => !r.fork);
}

/**
 * 🔹 Obtiene las estadísticas de lenguajes de un repositorio
 * @param {string} languages_url - URL que GitHub da para lenguajes
 * @returns {Promise<Object>} Ejemplo: { JavaScript: 12345, HTML: 5678 }
 */
async function fetchRepoLanguages(languages_url) {
  const headers = { "User-Agent": "skills-counter" };
  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  const res = await fetch(languages_url, { headers });
  if (!res.ok) {
    return {};
  }

  return res.json();
}

module.exports = {
  fetchAllRepos,
  fetchRepoLanguages
};
