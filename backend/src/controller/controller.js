const db = require('../DB/mysql');

function getAll() {
    return db.all('projects');
}

module.exports = {
    getAll
};
