const express = require('express');
const router = express.Router();
const controller = require('../controllers/musicasControllers');

router.get("/", controller.getAll);
//router.get("/artistas", controller.getAllArtistas);
router.get("/:titulo", controller.getTitulo);
router.get("/artistas/:artista", controller.getArtista);
router.get("/:id", controller.getById);
router.post("/", controller.postMusica);
router.delete("/:id", controller.deleteMusica);
router.put("/:id", controller.putMusica);




module.exports = router