const {pool} = require("../db.js");

module.exports = {
    list: async (req, res) => {
        const [rows] = await pool.query('SELECT * FROM users2')
        res.json(rows)
    },
    detail: async (req, res) => {
        const userID = req.params.id;
        const [rows] = await pool.query(`SELECT * FROM users2 WHERE id=${userID}`)
        res.json(rows)
    },   
}