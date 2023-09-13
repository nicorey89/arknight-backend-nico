const {pool} = require("../db.js");

module.exports = {
    list: async (req, res) => {
        const [rows] = await pool.query('SELECT * FROM users')
        res.json(rows)
    },
    detail: (req, res) => {
        res.send("detalle de usuario")
    }, 

}