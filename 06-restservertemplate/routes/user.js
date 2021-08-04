const { Router } = require("express");
const {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPacth,
    ErrorPage,
} = require("../controllers/user.controller");

const router = Router();

router.get("/", usuariosGet);

router.get("*", ErrorPage);

router.put("/:id", usuariosPut);

router.post("/", usuariosPost);

router.patch("/", usuariosPacth);

router.delete("/", usuariosDelete);

module.exports = router;
