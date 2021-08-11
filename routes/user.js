const { Router } = require("express");
const { body, check } = require("express-validator");
const {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPacth,
    ErrorPage,
} = require("../controllers/user.controller");
const {
    validateRol,
    emailExiste,
    existUser,
} = require("../helpers/db-validators");
const { validarCampos } = require("../middlewares/validar_campos");
const router = Router();

router.get("/", usuariosGet);

router.get("*", ErrorPage);

router.put("/:id",
[
    check('id','No es un id valido').isMongoId(),
    check('id').custom((id)=> existUser(id)),
    check("rol").custom((rol) => validateRol(rol)),
    validarCampos
]
, usuariosPut);
router.post(
    "/",
    [
        body("nombre", "El nombre es obligatorio").not().isEmpty(),
        body("password", "El password debe ser de mas de 6 letras").isLength({
            min: 6,
        }),
        body("correo", "El correo no es valido").isEmail(),
        check("correo").custom((correo) => emailExiste(correo)),
        check("rol").custom((rol) => validateRol(rol)),
        validarCampos,
    ],
    usuariosPost
);

router.patch("/", usuariosPacth);

router.delete("/:id",[
    check('id','No es un id valido').isMongoId(),
    check('id').custom((id)=> existUser(id)),
], usuariosDelete);

module.exports = router;
