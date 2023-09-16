const {pool} = require("../db.js")

module.exports = {
    create: async (req, res) => {
        const result = await pool.query('INSERT INTO users2 (name, email, pass) VALUES ("nicolas", "nico@mail.com", "112233")')
        res.json(result)
    }, 
}