const {pool} = require("../db.js")

module.exports = {
    index: (req, res) => {
        res.send("hola soy el home")
    },
    productsList: async (req, res) => {
        const [rows] = await pool.query('SELECT * FROM products')
        res.json(rows)
    },
    productDetail: async (req, res) => {
        const productID = req.params.id;
        const [rows] = await pool.query(`SELECT * FROM products WHERE id=${productID}`)
        res.json(rows)
    },
    productEdit: (req, res) => {
        res.send("hola soy el home")
    },
    productCreate: async (req, res) => {
        const result = await pool.query('INSERT INTO products (name, brand, price, discount, description, dues, image) VALUES ("amoladora", "de walt", "1111", "10", "csjdcjsdcjdjcjsdbcjbdc", "3", "defaultImage.jpg")')
        res.json(result)
    },
    productDestroy: (req, res) => {
        res.send("hola soy el home")
    },
    usersList: async (req, res) => {
        const [rows] = await pool.query('SELECT * FROM users')
        res.json(rows)
    },
    userDetail: async (req, res) => {
        const userID = req.params.id;
        const [rows] = await pool.query(`SELECT * FROM users WHERE id=${userID}`)
        res.json(rows)
    },
    userCreate: async (req, res) => {
        const result = await pool.query('INSERT INTO users (name, email, pass) VALUES ("nicolas", "nico@mail.com", "112233")')
        res.json(result)
    },
    userEdit: (req, res) => {
        res.send("hola soy el home")
    },
    userDestroy: (req, res) => {
        res.send("hola soy el home")
    },
}