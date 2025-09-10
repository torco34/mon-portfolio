const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

/**
 * 🔹 Helper para headers (con token opcional)
 */
function getHeaders() {
  const headers = { "User-Agent": "skills-counter" };
  if (GITHUB_TOKEN) headers.Authorization = `token ${GITHUB_TOKEN}`;
  return headers;
}

/**
 * 🔹 Obtiene todos los repositorios de un usuario
 */
async function fetchAllRepos(username) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error(`Error al obtener repos: ${res.status}`);
  return res.json();
}

/**
 * 🔹 Obtiene los lenguajes de un repo específico
 */
async function fetchRepoLanguages(username, repo) {
  const res = await fetch(
    `https://api.github.com/repos/${username}/${repo}/languages`,
    { headers: getHeaders() }
  );
  if (!res.ok) throw new Error(`Error al obtener lenguajes: ${res.status}`);
  return res.json();
}

/**
 * 🔹 Lee un archivo de un repositorio (ej: package.json)
 */
async function fetchFileFromRepo(username, repo, path) {
  const res = await fetch(
    `https://api.github.com/repos/${username}/${repo}/contents/${path}`,
    { headers: getHeaders() }
  );

  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Error al leer archivo: ${res.status}`);

  const data = await res.json();
  const content = Buffer.from(data.content, "base64").toString("utf-8");

  try {
    return JSON.parse(content);
  } catch {
    return content;
  }
}

/**
 * 🔹 Construye el resumen de skills desde GitHub
 */
async function fetchSkillsFromGithub(username) {
  const repos = await fetchAllRepos(username);

  let total = {};
  for (const repo of repos) {
    const langs = await fetchRepoLanguages(username, repo.name);

    for (const [lang, bytes] of Object.entries(langs)) {
      total[lang] = (total[lang] || 0) + bytes;
    }
  }

  const sum = Object.values(total).reduce((a, b) => a + b, 0);

  // Normalizamos a porcentajes
  return Object.entries(total).map(([lang, bytes]) => ({
    lang,
    percent: ((bytes / sum) * 100).toFixed(1),
  }));
}

module.exports = {
  fetchAllRepos,
  fetchRepoLanguages,
  fetchFileFromRepo,
  fetchSkillsFromGithub, // 👈 ahora sí lo exportamos
};
