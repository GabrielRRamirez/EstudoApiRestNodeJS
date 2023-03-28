import express from 'express';
import AutorController from '../controller/autor/autorController.js'

const router = express.Router();

router
    .get('/autores', AutorController.find)
    .get('/autores/:id', AutorController.findById)
    .post('/autores', AutorController.insert)
    .put('/autores/:id', AutorController.update)
    .delete('/autores/:id', AutorController.destroy);

export default router;