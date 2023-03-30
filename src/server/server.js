import express from "express";
import routes from "../routes/index.js";

export function startServer() {
    let servidor = express();
    routes(servidor);
    
    servidor.listen(3000, () => {
        console.log("server started and listening port 3000");
    });
}