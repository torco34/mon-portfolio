const db = require('../DB/mysql');
const table = 'projects';
async function getAll() {

    return db.all(table);
}
async function insertPost(project) {
    // project = { title, description, image_url, repo_url }
    if (!project.title) {
        throw new Error("El campo 'title' es requerido");
    }

    return db.insert(table, {
        ...project,
        created_at: new Date(),
    });
}

async function deletePost(id) {
    if (!id) {
        throw new Error("El campo 'id' es requerido para eliminar");
    }

    return db.remove(table, id);
}
module.exports = { getAll, insertPost, deletePost };
