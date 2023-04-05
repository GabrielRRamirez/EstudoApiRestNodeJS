import express from "express";
import livroRoutes from "../routes/livroRoutes.js";
import autorRoutes from "../routes/autorRoutes.js";
import recusoNaoEncontradoMiddlware from "../middlewares/recursoNaoEncontradoMiddleware.js";

const routes = (server) => {

    server.get("/", (_, res) => {
        res.status(200).send("servidor online!");
    });

    server.use(
        express.json(),
        livroRoutes,
        autorRoutes
    );

    server.use(recusoNaoEncontradoMiddlware);
};

export default routes;