const db = require('../DB/mysql');
const table = 'skills';

// Obtener todas
function getAll() {
  return db.findAll(table);
}

// Buscar por ID
function getId(id) {
  return db.findById(table, id);
}

// Buscar por lang (aquí corregimos)
function getByLang(lang) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${table} WHERE lang = ?`, [lang], (err, results) => {
      if (err) return reject(err);
      resolve(results[0] || null);
    });
  });
}

// Insertar
function insert(data) {
  return db.create(table, data);
}

// Actualizar
function update(id, data) {
  return db.update(table, id, data);
}

// Eliminar
function deleteId(id) {
  return db.remove(table, id);
}

module.exports = {
  getAll,
  getId,
  getByLang,
  insert,
  update,
  deleteId
};
