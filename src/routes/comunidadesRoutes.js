const express = require('express')
const router = express.Router()
const controller = require('../controller/comunidadesController')

router.get('/comunidades', controller.findAllComunidades)
router.get('/comunidade/:id', controller.findComunidadetById)
router.post('/comunidade/create', controller.NewComunidade)
router.patch('/comunidade/atualizar/:id', controller.updateComunidade)
router.delete('/comunidade/deletar/:id', controller.deleteComunidade)

module.exports = router