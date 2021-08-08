const express = require("express");
const cors = require("cors");
const { dbconection } = require("../db/config");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = "/api/usuarios";
        //Conectar a DB
        this.conectarDB();
        //Middlewares
        this.middlewares();
        //Application routes
        this.routes();
    }

    async conectarDB() {
        await dbconection();
    }

    middlewares() {
        //cors
        this.app.use(cors());
        //read and parse
        this.app.use(express.json());
        //Public Directory
        this.app.use(express.static("public"));
    }
    routes() {
        this.app.use(this.userPath, require("../routes/user"));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(
                `Server server on http://localhost:${process.env.PORT}`
            );
        });
    }
}

module.exports = Server;
