const express = require("express");
const router = express.Router();
const test_makeCategory = require("../controllers/categoryController");

router.get("/", test_makeCategory.test_makeCategory);

module.exports = router;
