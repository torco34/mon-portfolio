

// const GITHUB_TOKEN = process.env.GITHUB_TOKEN || null;

// async function fetchAllRepos(username) {
//   const headers = { "User-Agent": "skills-counter" };
//   if (GITHUB_TOKEN) {
//     headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
//   }

//   let page = 1;
//   const repos = [];

//   while (true) {
//     const res = await fetch(
//       `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`,
//       { headers }
//     );

//     if (!res.ok) {
//       throw new Error(`Error al obtener repos de GitHub: ${res.status}`);
//     }

//     const data = await res.json();
//     repos.push(...data);

//     if (data.length < 100) break;
//     page++;
//   }

//   return repos.filter(r => !r.fork);
// }

// async function fetchRepoLanguages(languages_url) {
//   const headers = { "User-Agent": "skills-counter" };
//   if (GITHUB_TOKEN) {
//     headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
//   }

//   const res = await fetch(languages_url, { headers });
//   if (!res.ok) {
//     return {};
//   }

//   return res.json();
// }

// module.exports = {
//   fetchAllRepos,
//   fetchRepoLanguages
// };

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

/**
 * 🔹 Obtiene todos los repos de un usuario
 * @param {string} username
 * @returns {Promise<Array>}
 */
async function fetchAllRepos(username) {
  const headers = { "User-Agent": "skills-counter" };
  if (GITHUB_TOKEN) {

    headers.Authorization = `token ${GITHUB_TOKEN}`;

  }

  const res = await fetch(`https://api.github.com/users/${username}/repos`, { headers });
  if (!res.ok) throw new Error(`Error al obtener repos: ${res.status}`);

  return res.json(); // 👈 devuelve objetos completos
}


/**
 * 🔹 Obtiene los lenguajes de un repo específico
 * @param {string} username
 * @param {string} repo
 * @returns {Promise<Object>}
 */
async function fetchRepoLanguages(username, repo) {
  const headers = { "User-Agent": "skills-counter" };
  if (GITHUB_TOKEN) headers.Authorization = `token ${GITHUB_TOKEN}`;


  const res = await fetch(`https://api.github.com/repos/${username}/${repo}/languages`, { headers });
  console.log("🌐 Consultando:", res);
  if (!res.ok) throw new Error(`Error al obtener lenguajes: ${res.status}`);

  return res.json();
}

/**
 * 🔹 Lee un archivo específico dentro de un repositorio (ej: package.json)
 * @param {string} username - Nombre de usuario
 * @param {string} repo - Nombre del repositorio
 * @param {string} path - Ruta del archivo dentro del repo
 * @returns {Promise<Object|string>} Contenido del archivo
 */
async function fetchFileFromRepo(username, repo, path) {
  const headers = { "User-Agent": "skills-counter" };
  if (GITHUB_TOKEN) headers.Authorization = `token ${GITHUB_TOKEN}`;


  const res = await fetch(`https://api.github.com/repos/${username}/${repo}/contents/${path}`, { headers });

  if (res.status === 404) return null; // archivo no existe
  if (!res.ok) throw new Error(`Error al leer archivo: ${res.status}`);

  const data = await res.json();
  const content = Buffer.from(data.content, "base64").toString("utf-8");

  try {
    return JSON.parse(content); // si es un JSON válido (ej: package.json)
  } catch {
    return content;
  }
}

module.exports = {
  fetchAllRepos,
  fetchRepoLanguages,
  fetchFileFromRepo
};

