const {pool} = require("../db.js");

module.exports = {
    list: async (req, res) => {
        const [rows] = await pool.query('SELECT * FROM users')
        res.json(rows)
    },
    detail: async (req, res) => {
        const userID = req.params.id;
        const [rows] = await pool.query(`SELECT * FROM users WHERE id=${userID}`)
        res.json(rows)
    },   
    create: async (req, res) => {
        const [rows] = await pool.query(`INSERT INTO products (name, email, pass) VALUES ("nicolas", "nico@mail.com", "112233")`)
        res.redirect("https://arknight-backend-nico-production.up.railway.app/users")
    }, 

}