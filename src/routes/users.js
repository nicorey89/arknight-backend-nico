const express = require("express");
const router = express.Router();
const { list, detail, create} = require("../controllers/userController");

router
    .get("/", list)
    .get("/:id", detail)
    .get("/create", create)

module.exports = router;