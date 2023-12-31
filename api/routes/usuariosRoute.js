const { Router } = require('express');
const UsuariosController = require('../controllers/UsuariosController');

const router = Router()


router.get('/usuarios', UsuariosController.getAll);
router.post('/usuarios', UsuariosController.criaUsuario);
router.put('/usuarios/:id', UsuariosController.atualizaUsuario);
router.delete('/usuarios/:id', UsuariosController.apagaUsuario);

module.exports = router