const express = require("express");
const router = express.Router();
const {
  buildMethod,
  createMethod,
  bulkMethod,
} = require("../controllers/insertController");

router.post("/build", buildMethod);
router.post("/create", createMethod);
router.post("/bulkCreate", bulkMethod);

module.exports = router;
