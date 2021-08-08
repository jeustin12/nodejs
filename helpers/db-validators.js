const role = require("../models/rol");
const Usuario = require("../models/usuario");

const validateRol = async (rol = "") => {
    const existRol = await role.findOne({ rol });
    if (!existRol) {
        throw new Error(
            `El rol: ${rol} no esta registrado en la base de datos`
        );
    }
};
const emailExiste = async (correo = "") => {
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo: ${correo} ya esta registrado`);
    }
};
const existUser = async (id) => {
    const existeUsuario = await Usuario.findById({ id });
    if (existeUsuario) {
        throw new Error(`El usuario con la id : ${id} ya esta registrado`);
    }
};
module.exports = {
    validateRol,
    emailExiste,
    existUser,
};
