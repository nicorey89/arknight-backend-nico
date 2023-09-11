
module.exports = {
     listar: (req,res)=>{
      res.send("listado de productos")
    },
     listarUsers: (req,res)=>{
      res.send("listado de usuarios")
    },
    create: (req, res) => {
      res.send("creacion de productos")
    },
    store: (req, res) => {
      res.send("guardado de producto")
    },
    edit: (req, res) => {
      res.send("edicion de producto")
    },
    update: (req, res) => {
      res.send("actualizacion de producto")
    },
    destroy : (req, res ) => {
	  res.send("eliminacion de producto")
    },
    userUpdate: (req,res) => {
      res.send("edicion de usuario")
    },
    destroyUser:(req,res) => {
      res.send("eliminacon de usuario")
    }
}
