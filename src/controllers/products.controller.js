const {pool} = require("../db.js")

const productsList = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM products')
    res.json({result})
};
const productDetail = async (req, res) => {
    const productId = req.params.id;
    const [result] = await pool.query(`SELECT * FROM products WHERE id=${productId}`)
    res.json({result})
};
const productEdit = (req, res) => {
    const productId = req.params.id;
    res.send(`hola soy la edicion de producto ${productId}`)
};
const productCreate = async (req, res) => {
    const { name, brands, price, description, discount, dues, image } = req.body;
    const [rows] = await pool.query('INSERT INTO products (name, brands, price, description, discount, dues, image) VALUES(?,?,?,?,?,?,?)', [name, brands, price, description, discount, dues, image])
    res.json({rows})
};
const productDestroy = (req, res) => {
    const productId = req.params.id;
    res.send(`hola soy el destroy de product ${productId}`)
}



module.exports = {productsList, productDetail, productCreate, productEdit, productDestroy}