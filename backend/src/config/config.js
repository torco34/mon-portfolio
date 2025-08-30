require('dotenv').config(); // ← carga el .env

module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },
    mysql: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
    },
    github: {
        username: process.env.GITHUB_USERNAME,
        token: process.env.GITHUB_TOKEN,
    },
    email: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
};
