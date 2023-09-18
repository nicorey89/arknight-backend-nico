const {pool} = require("../db.js")

const usersList = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM users')
    res.json({result})
};
const userDetail = async (req, res) => {
    const userId = req.params.id;
    const [result] = await pool.query(`SELECT * FROM users WHERE id=${userId}`)
    res.json({result})
};
const userEdit = (req, res) => {
    const userId = req.params.id;
    res.send(`hola soy la edicion de producto ${userId}`)
};
const userCreate = async (req, res) => {
    const { name, email, pass, adress, phone, country, location, avatar } = req.body;
    const [rows] = await pool.query('INSERT INTO users (name, email, pass, adress, phone, country, location, avatar) VALUES(?,?,?,?,?,?,?,?)', [name, email, pass, adress, phone, country, location, avatar])
    res.json({rows})
};
const userDestroy = (req, res) => {
    const userId = req.params.id;
    res.send(`hola soy el destroy de product ${userId}`)
}



module.exports = {usersList, userDetail, userCreate, userEdit, userDestroy}