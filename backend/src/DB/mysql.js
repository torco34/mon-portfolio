const mysql = require("mysql2");
const config = require("../config/config.js");

let connection;

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
            console.log('[Error connecting to the database:]', err);
            setTimeout(createMysql, 2000);
        } else {
            console.log('Connected to the MySQL database');
        }
    });

    connection.on('error', (err) => {
        console.log('[Database error:]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            createMysql();
        } else {
            throw err;
        }
    });
}

createMysql();

// DB/mysql.js
function all(tabla) {
    console.log(`🔍 Ejecutando SELECT * FROM ${tabla}`);
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${tabla}`, (err, results) => {
            if (err) {
                console.error('❌ Error en query:', err);
                return reject(err);
            }
            console.log(`✅ Query completada, ${results.length} registros encontrados`);
            resolve(results);
        });
    });
}
function insert(tabla, data) {
    console.log(`📝 Insertando en ${tabla}:`, data);
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO ${tabla} SET ?`,
            data,
            (err, results) => {
                if (err) {
                    console.error('❌ Error en insert:', err);
                    return reject(err);
                }
                console.log(`✅ Insert completado, ID: ${results.insertId}`);
                resolve({ id: results.insertId, ...data });
            }
        );
    });
}
function remove(tabla, id) {
    console.log(`🗑️ Eliminando de ${tabla}, ID: ${id}`);
    return new Promise((resolve, reject) => {
        connection.query(
            `DELETE FROM ${tabla} WHERE id = ?`,
            [id],
            (err, results) => {
                if (err) {
                    console.error('❌ Error en delete:', err);
                    return reject(err);
                }
                if (results.affectedRows === 0) {
                    console.warn(`⚠️ Ningún registro eliminado en ${tabla} con ID: ${id}`);
                    return resolve(null);
                }
                console.log(`✅ Registro con ID ${id} eliminado de ${tabla}`);
                resolve({ id });
            }
        );
    });
}
module.exports = { all, insert, remove };
