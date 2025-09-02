const db = require("../DB/mysql");
const table = "repos";

async function findAll() {
    return db.query(`SELECT * FROM ${table}`);
}

async function createOrUpdate(repo) {
    const sql = `
    INSERT INTO ${table} (id, name, description, url, stars, language, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      name = VALUES(name),
      description = VALUES(description),
      url = VALUES(url),
      stars = VALUES(stars),
      language = VALUES(language),
      updated_at = VALUES(updated_at)
  `;
    return db.query(sql, [
        repo.id,
        repo.name,
        repo.description,
        repo.url,
        repo.stars,
        repo.language,
        repo.updated_at,
    ]);
}

module.exports = { findAll, createOrUpdate };
