import express from "express";
import routes from "../routes/index.js";
import errorMiddleware from "../middlewares/errorMiddleware.js";

export function startServer() {
    let servidor = express();
    routes(servidor);
    servidor.use(errorMiddleware);
    
    servidor.listen(3000, () => {
        console.log("server started and listening port 3000");
    });
}