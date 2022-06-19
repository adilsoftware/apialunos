const express = require('express');
const router = express();

const EstudanteController = require('./controllers/EstudanteController');

router.get('/estudante', EstudanteController.buscarTodos);
router.get('/estudante/:id', EstudanteController.buscarUm);
router.post('/estudante', EstudanteController.inserir);
router.put('/estudante/:id', EstudanteController.alterar);
router.delete('/estudante/:id', EstudanteController.excluir);

module.exports = router;

