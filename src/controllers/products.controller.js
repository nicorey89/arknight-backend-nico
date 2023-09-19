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
const productEdit = async (req, res) => {
    const productId = req.params.id;
    const { name, brands, price, description, discount, dues, image } = req.body;
    const [rows] = await pool.query(`UPDATE products SET name = ?, brands = ?, price = ?, description = ?, discount = ?, dues = ?, image = ? WHERE id=${productId}`, [name, brands, price, description, discount, dues, image])
    res.json(rows)
};
const productCreate = async (req, res) => {
    const { name, brands, price, description, discount, dues, image } = req.body;
    const [rows] = await pool.query('INSERT INTO products (name, brands, price, description, discount, dues, image) VALUES(?,?,?,?,?,?,?)', [name, brands, price, description, discount, dues, image])
    res.json({rows})
};
const productDestroy = async (req, res) => {
    const productId = req.params.id;
    const [rows] = await pool.query(`DELETE FROM products WHERE id=${productId}`)
    res.json(rows)
}



module.exports = {productsList, productDetail, productCreate, productEdit, productDestroy}