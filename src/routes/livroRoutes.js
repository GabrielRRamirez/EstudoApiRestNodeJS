import express from "express";
import LivroController from "../controller/livro/livroController.js";
import paginate from "../middlewares/paginationMiddleware.js";

const router = express.Router();
router
    .get("/livros", LivroController.find, paginate)
    .get("/livros/busca", LivroController.findByTitulo)
    .get("/livros/:id", LivroController.findById)
    .post("/livros", LivroController.insert)
    .put("/livros/:id", LivroController.update)
    .delete("/livros/:id", LivroController.destroy);

export default router; 