const express = require("express");
const router = express.Router();
const { findAllMethod } = require("../controllers/queryController");

router.get("/find-all", findAllMethod);
// router.post("/create", createMethod);
// router.post("/bulkCreate", bulkMethod);

module.exports = router;
