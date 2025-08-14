(async () => {
    const db = require('./src/DB/mysql');
    const results = await db.all('projects');
    console.log(results);
})();