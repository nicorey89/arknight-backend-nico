const {pool} = require("../db.js");
const {getUserByEmail} = require("../services/user.service.js");
const {generateToken} = require("../helpers/jwt.helper.js");

const usersList = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM users')
    res.json({result})
};
const userDetail = async (req, res) => {
    const userId = req.params.id;
    const [user] = await pool.query(`SELECT * FROM users WHERE id=${userId}`)
    res.json({user})
};
const userEdit = async (req, res) => {
    const userId = req.params.id;
    const { name, email, pass, adress, phone, country, location, avatar } = req.body;
    const [rows] = await pool.query(`UPDATE users SET name = ?, email = ?, pass = ?, adress = ?, phone = ?, country = ?, location = ?, avatar = ? WHERE id=${userId}`, [name, email, pass, adress, phone, country, location, avatar])
    res.json(rows)
};
const userCreate = async (req, res) => {
    const { name, email, pass, adress, phone, country, location, avatar } = req.body;
    const [rows] = await pool.query('INSERT INTO users (name, email, pass, adress, phone, country, location, avatar) VALUES(?,?,?,?,?,?,?,?)', [name, email, pass, adress, phone, country, location, avatar])
    res.json({rows})
};
const userDestroy = async (req, res) => {
    const userId = req.params.id;
    const [rows] = await pool.query(`DELETE FROM users WHERE id=${userId}`)
    res.json(rows)
};
const login = async (req, res) => {
    try {
      const { email } = req.body;
      const user = await getUserByEmail(email);
      const token = generateToken(user);

      return res.json({token})
    } catch (error) {
      return res.json({ Error: "Token error " + error });
    }
  };



module.exports = {usersList, userDetail, userCreate, userEdit, userDestroy, login}