const { Router } = require("express");
const UsuarioController = require("../controllers/UsuarioController");

const router = Router();

router.get("/usuarios", UsuarioController.getUsuarios);

module.exports = router;
