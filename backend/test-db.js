// (async () => {
//     const db = require('./src/DB/mysql');
//     const results = await db.all('projects');
//     console.log(results);
// })();

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola mundo desde Node\n');
});

server.listen(4000, '127.0.0.1', () => {
    console.log('Servidor HTTP escuchando en http://127.0.0.1:4000');
});
