const mongoose = require("mongoose");

const dbconection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log("DB connected");
    } catch (error) {
        throw new Error("Error en la base de datos");
    }
};

module.exports = {
    dbconection,
};
