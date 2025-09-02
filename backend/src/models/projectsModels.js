const db = require('../DB/mysql');
const table = 'projects';
// hacer peticiones de bse de datos
function getAll() {
    return db.findAll(table);
}
function getId(id) {
    return db.findById(table, id);
}
function insert(data) {
    return db.create(table, data);
}
function update(data) {
    return db.update(table, data);
}
function deleteId(data) {
    return db.remove(table, data);
}


module.exports = {
    getAll,
    getId,
    update,
    deleteId,
    insert

}