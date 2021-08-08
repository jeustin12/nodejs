const role = require('../models/rol')

const validateRol = async(rol='') => {
    const existRol = await role.findOne({rol})
    if (!existRol) {
        throw new Error(`El rol: ${rol} no esta registrado en la base de datos`)
    }
}

module.exports ={
    validateRol
}