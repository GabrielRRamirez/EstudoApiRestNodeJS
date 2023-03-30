import express from "express";
import LivroController from "../controller/livro/livroController.js";

const router = express.Router();
router
    .get("/livros", LivroController.find)
    .get("/livros/busca", LivroController.findByTitulo)
    .get("/livros/:id", LivroController.findById)
    .post("/livros", LivroController.insert)
    .put("/livros/:id", LivroController.update)
    .delete("/livros/:id", LivroController.destroy);

export default router; 