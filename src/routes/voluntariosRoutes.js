const express = require('express')
const router = express.Router()
const controller = require('../controller/voluntarioController')

router.get('/voluntarios', controller.getAll)
router.post('/voluntario/create', controller.create)
router.delete('/delete/:id', controller.deleteVoluntarioById)
router.post('/voluntario/login', controller.loginDoVoluntario)
router.patch('/voluntario/atualizar/:nome', controller.updateVoluntario)
module.exports = router