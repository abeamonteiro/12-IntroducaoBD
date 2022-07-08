const controller = require('../controller/controller')
const express = require('express')
const router = express.Router()

router.get("/listaDeSeries", controller.getAllSeries)
router.get("/listaDeSeries/:id", controller.getSeries)
router.post("/novoCadastro", controller.createSeries)
router.patch("/atualizarSeries/:id", controller.updateSeries)
router.delete("/deletarSerie/:id", controller.deleteSerie)


module.exports = router
