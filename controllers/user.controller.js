const { response, request } = require("express");

const ErrorPage = (req = request, res) => {
    res.sendFile(__dirname + "/404.html");
};

const usuariosGet = (req = request, res = response) => {
    const { q, nombre = "no name" } = req.query;
    res.json({
        msg: "this is a json",
        q,
        nombre,
    });
};

const usuariosPut = (req = request, res = response) => {
    const { id } = req.params;
    res.json({
        msg: "this is a json put",
        id,
    });
};

const usuariosPost = (req = request, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: "this is a json post",
        nombre,
        edad,
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
