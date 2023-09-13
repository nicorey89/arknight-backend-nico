const {pool} = require("../db.js");

module.exports = {
    list: async (req, res) => {
        const [rows] = await pool.query('SELECT * FROM products')
        res.json(rows)
    },
    detail: (req, res) => {
        res.send("detalle de producto")
    }, 

}