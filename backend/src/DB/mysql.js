const mysql = require("mysql2");

const config = require("../config/config.js");

let connection;
// 
const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

function createMysql() {
    connection = mysql.createConnection(dbConfig);
    connection.connect((err) => {
        if (err) {
        console.log("[❌ Error connecting to the database:]", err);
        setTimeout(createMysql, 2000);
    } else {
          console.log("✅ Connected to the MySQL database");
      }
  });

    connection.on("error", (err) => {
        console.log("[⚠️ Database error:]", err);
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            createMysql();
        } else {
            throw err;
        }
    });
}

createMysql();


/* 🔹 CRUD Genérico */

// Traer todos
function findAll(table) {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ${table}`, (err, results) => {
          if (err) return reject(err);
          resolve(results);
      });
  });
}

// Traer por ID
function findById(table, id) {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ${table} WHERE id = ?`, [id], (err, results) => {
          if (err) return reject(err);
          resolve(results[0] || null); // Devuelve null si no existe
      });
  });
}

// Insertar
function create(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`, data, (err, results) => {
            if (err) return reject(err);
            resolve({ id: results.insertId, ...data });
    });
  });
}

// Actualizar
function update(table, id, data) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, id], (err, results) => {
            if (err) return reject(err);
            resolve({ id, ...data });
        });
    });
}

// Eliminar
function remove(table, id) {
    return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM ${table} WHERE id = ?`, [id], (err, results) => {
          if (err) return reject(err);
          if (results.affectedRows === 0) return resolve(null);
          resolve({ id });
    });
  });
}


module.exports = {
    query: (...args) => connection.query(...args),

    findAll,
    findById,
    create,
    update,
    remove,
};
