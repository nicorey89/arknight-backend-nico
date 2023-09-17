const express = require("express");
const router = express.Router();
const {
    index,
    productsList, 
    productDetail, 
    productCreate, 
    productEdit, 
    productDestroy, 
    usersList, 
    userDetail, 
    userCreate, 
    userEdit, 
    userDestroy} = require("../controllers/indexController");

router
    .get("/", index)
    .get("/users", usersList)
    .get("/products", productsList)
    .post("/products", productCreate)
    .get("/users/:id", userDetail)
    .get("/products/:id", productDetail)
    .get("/createuser", userCreate)
    .get("/edituser/:id", userEdit)
    .get("/editproduct/:id", productEdit)
    .get("/destroyuser/:id", userDestroy)
    .get("/destroyproduct/:id", productDestroy)


module.exports = router;