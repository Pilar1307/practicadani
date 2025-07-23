const express = require('express');
const router = express.Router();
const palapaController=require('../controllers/palapaController')


router.get('/bebidas', palapaController.buscartodo)
.post('/bebidas', palapaController.agregar)
.get('/bebidas/:key/:value',palapaController.buscarbebida, palapaController.mostrarbebida)
.delete('/bebidas/:key/:value',palapaController.buscarbebida, palapaController.eliminarbebida)
.put('/bebidas/:key/:value',palapaController.buscarbebida, palapaController.actualizarbebida)
module.exports = router;