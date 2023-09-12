const {pool} = require("../db.js");

module.exports = {
    list: (req, res) => {
        res.send("listado de usuarios")
    },
    detail: (req, res) => {
        res.send("detalle de usuario")
    }, 

}