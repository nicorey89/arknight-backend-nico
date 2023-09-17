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

router.get("/", index);
router.get("/users", usersList);
router.get("/products", productsList);
router.post("/products/create", productCreate);
router.put("/products/:id", productEdit);
router.delete("/products/:id", productDestroy);
router.get("/users/:id", userDetail);
router.get("/products/:id", productDetail);
router.get("/createuser", userCreate);
router.get("/edituser/:id", userEdit);
router.get("/destroyuser/:id", userDestroy);

module.exports = router;