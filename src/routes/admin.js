const express = require("express");
const router = express.Router();

 /*const sessionAdminCheck = require("../middleware/sessionAdminCheck");   */

const {destroyUser, listarUsers, userUpdate, create, edit , destroy , store , update , listar} = require('../controllers/adminController')
/*const {uploadFile} = require('../middleware/upload') */


// Validation
/* const createProductValidation = require('../validations/createProductVALIDACION');
const editProductValidation = require('../validations/editProductValidacion');
 */

/* GET - Index */
/* router.get("/", sessionAdminCheck ,index); */

/* GET - EDIT - ADMIN PRODUCT */
router.get('/products', listar);
router.get('/users', listarUsers);
router.put('/users/:id', userUpdate);

/*** CREATE ONE PRODUCT ***/
router.get('/create/',create);
router.post('/create/', store);

/*** EDIT ONE PRODUCT ***/
router.get('/edit/:id',edit);
router.put('/edit/:id', update);

/*** DELETE ONE PRODUCT ***/
router.delete('/products/:id', destroy)
router.delete('/users/:id', destroyUser)

module.exports = router;