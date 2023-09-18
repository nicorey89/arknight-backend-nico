const express = require("express");
const router = express.Router();
const {
    productsList, 
    productDetail, 
    productCreate, 
    productEdit, 
    productDestroy} = require("../controllers/products.controller.js");

router.get("/products", productsList)
router.get("/products/:id", productDetail)
router.post("/products", productCreate)
router.put("/products/:id", productEdit)
router.delete("/products/:id", productDestroy)

module.exports = router;