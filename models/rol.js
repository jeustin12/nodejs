const {Schema,model} = require('mongoose');

const rolschema = Schema({
    rol:{
        type:String,
        required:[true,'el rol es requerido']
    }
});

module.exports = model('role',rolschema);