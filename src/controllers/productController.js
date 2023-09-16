const {pool} = require("../db.js");

module.exports = {
    list: async (req, res) => {
        const [rows] = await pool.query('SELECT * FROM products')
        res.json(rows)
    },
    detail: async (req, res) => {
        const productID = req.params.id;
        const [rows] = await pool.query(`SELECT * FROM products WHERE id=${productID}`)
        res.json(rows)
    }, 
    create: async (req, res) => {
        const [rows] = await pool.query(`INSERT INTO products (name, email, pass) VALUES ("nicolas", "nico@mail.com", "112233")`)
        res.redirect("https://arknight-backend-nico-production.up.railway.app/products")
    }, 

}