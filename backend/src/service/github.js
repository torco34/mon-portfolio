

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || null;

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

    if (data.length < 100) break;
    page++;
  }

  return repos.filter(r => !r.fork);
}

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
