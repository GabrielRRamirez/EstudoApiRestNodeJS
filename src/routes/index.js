import express from 'express';
import livroRoutes from '../routes/livroRoutes.js';
import autorRoutes from '../routes/autorRoutes.js'

const routes = (server) => {

    server.get('/', (_, res) => {
        res.status(200).send('servidor online!');
    })

    server.use(
        express.json(),
        livroRoutes,
        autorRoutes
    )
}

export default routes;