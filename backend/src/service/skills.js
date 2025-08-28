const { fetchAllRepos, fetchRepoLanguages } = require("./github");

async function getSkillsFromGithub(username) {
    const repos = await fetchAllRepos(username);
    const totals = {};

    for (const repo of repos) {
        const langs = await fetchRepoLanguages(repo.languages_url);
        for (const [lang, bytes] of Object.entries(langs)) {
            totals[lang] = (totals[lang] || 0) + bytes;
        }
    }

    return totals;
}

function normalizeSkills(totals) {
    const sum = Object.values(totals).reduce((a, b) => a + b, 0);
    return Object.entries(totals)
        .map(([lang, val]) => ({
            lang,
            percent: ((val / sum) * 100).toFixed(1),
        }))
        .sort((a, b) => b.percent - a.percent);
}

module.exports = { getSkillsFromGithub, normalizeSkills };
