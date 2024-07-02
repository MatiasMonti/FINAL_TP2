import express from 'express'
import controller from '../controllers/sondas.controller.js'

const router = express.Router()

router.get("/datos-sondas", controller.getDatosSondas);
router.get("/datos-sondas/:id", controller.getDatosSondaByID);
router.post("/datos-sondas", controller.postDatosSonda);

export default router