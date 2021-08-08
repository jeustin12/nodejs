const { response, request } = require("express");
const bcrypt = require('bcryptjs')
const Usuario = require('../models/usuario');

const ErrorPage = (req = request, res) => {
    res.sendFile(__dirname + "/404.html");
};

const usuariosGet = (req = request, res = response) => {
    const { q='', nombre = "no name" } = req.query;
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

const usuariosPost = async (req = request, res = response) => {
    const {nombre,correo,password,rol} = req.body;
    const usuario = new Usuario({nombre,correo,password,rol});
    
    //verificar el correo
    const existeEmail = await Usuario.findOne({correo}) 
    if(existeEmail){
        return res.status(400).json({
            msg: 'El correo ya esta registrado'
        })
    }
    //encriptar
    const salt = bcrypt.genSaltSync();
    usuario.password= bcrypt.hashSync(password,salt); 
    
    await usuario.save();

    res.json({
        msg: "this is a json post",
        usuario
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
