const mysql = require("mysql2");
const config = require("../config/config.js");
let connection;
const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}
function connect() {
    connection = mysql.createConnection(dbconfig);
    connection.connect((err) => {
        if (err) {
            console.error("Error connecting to the database:", err);
            return;
        }
        console.log("Connected to the MySQL database");
    });
}

function getConnection() {
    if (!connection) {
        connect();
    }
    return connection;
}

module.exports = {
    connect,
    getConnection,
};