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


}