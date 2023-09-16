const express = require("express");
const router = express.Router();
const {create} = require("../controllers/userCreateController");

router
    .get("/", create)

module.exports = router;