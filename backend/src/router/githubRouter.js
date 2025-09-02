const express = require("express");
const router = express.Router();
const githubController = require("../controller/githubController");

// sincronizar manualmente
router.get("/sync", githubController.syncRepos);

// obtener de DB
router.get("/", githubController.getRepos);

module.exports = router;
