const db = require("../DB/mysql");
const table = "skills_cache";

async function findByUsername(username) {
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT * FROM ${table} WHERE username = ?`,
            [username],
            (err, results) => {
                if (err) return reject(err);
                resolve(results[0] || null);
            }
        );
    });
}

async function createOrUpdate(username, skillsJson) {
    const record = {
        username,
        data: JSON.stringify(skillsJson), // 👈 ahora usamos la columna `data`
        updated_at: new Date()
    };

    return new Promise((resolve, reject) => {
        db.query(
            `INSERT INTO ${table} (username, data, updated_at)
             VALUES (?, ?, ?)
             ON DUPLICATE KEY UPDATE 
               data = VALUES(data),
               updated_at = VALUES(updated_at)`,
            [username, record.data, record.updated_at],
            (err, results) => {
                if (err) return reject(err);
                resolve(results);
            }
        );
    });
}

module.exports = { findByUsername, createOrUpdate };
