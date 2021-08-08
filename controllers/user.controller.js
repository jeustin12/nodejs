const { response, request } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/usuario");

const ErrorPage = (req = request, res) => {
    res.sendFile(__dirname + "/404.html");
};

const usuariosGet = (req = request, res = response) => {
    const { q = "", nombre = "no name" } = req.query;
    res.json({
        msg: "this is a json",
        q,
        nombre,
    });
};

const usuariosPut = async (req = request, res = response) => {
    const { id } = req.params;
    const { password, google, correo, ...resto } = req.body;
    // validar con db

    if (password) {
        const salt = bcrypt.genSaltSync();
        resto.password = bcrypt.hashSync(password, salt);
    }
    const usuarioDb = await Usuario.findByIdAndUpdate(id, resto);
    res.json({
        msg: "this is a json put",
        id,
    });
};

const usuariosPost = async (req = request, res = response) => {
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    //verificar el correo

    //encriptar
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    res.json({
        msg: "this is a json post",
        usuario,
    });
};
const usuariosPacth = (req = request, res = response) => {
    res.json({
        msg: "this is a json pacth",
    });
};

const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: "this is a json delete",
    });
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPacth,
    ErrorPage,
};
