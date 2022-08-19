const express = require("express");
const router = express.Router();
const { oneToMany } = require("../controllers/associationController");

router.post("/oneToMany", oneToMany);

module.exports = router;
