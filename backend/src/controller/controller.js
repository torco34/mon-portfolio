const db = require('../DB/mysql');
const table = 'projects';
async function getAll() {

    return db.all(table);
}

module.exports = { getAll };
