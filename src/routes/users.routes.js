const express = require("express");
const router = express.Router();
const {
    usersList, 
    userDetail, 
    userCreate,
    login, 
    userEdit, 
    userDestroy} = require("../controllers/users.controller.js");

router.get("/users", usersList)
router.get("/users/:id", userDetail)
router.post("/users/create", userCreate)
router.post("/users/login", login)
router.put("/users/:id", userEdit)
router.delete("/users/:id", userDestroy)

module.exports = router;