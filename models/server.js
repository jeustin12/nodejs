const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = "/api/usuarios";
        //Middlewares
        this.middlewares();
        //Application routes
        this.routes();
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
