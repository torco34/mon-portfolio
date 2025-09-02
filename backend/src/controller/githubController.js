const axios = require("axios");
const githubModel = require("../models/githubModel");

// sincronizar repos desde GitHub hacia DB
async function syncRepos(req, res) {
    try {
        const response = await axios.get(
            "https://api.github.com/users/torco34/repos"
        );
        const repos = response.data;

        for (const repo of repos) {
            await githubModel.createOrUpdate({
                id: repo.id,
                name: repo.name,
                description: repo.description,
                url: repo.html_url,
                stars: repo.stargazers_count,
                language: repo.language,
                updated_at: repo.updated_at,
            });
        }

        res.json({ message: "Repos sincronizados con DB", total: repos.length });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// obtener repos directamente desde DB
async function getRepos(req, res) {
    try {
        const repos = await githubModel.findAll();
        res.json(repos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { syncRepos, getRepos };
