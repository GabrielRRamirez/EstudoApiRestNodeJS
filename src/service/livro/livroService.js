import { Response } from "../../models/response/response.js";
import livroModel from "../../models/livro/LivroModel.js";

class LivroService {

    validarEstrutura(req) {
        let { titulo, valor } = req.body;
        let tituloValido = titulo !== undefined && titulo !== "";
        let valorValido = valor > 0;
        return (tituloValido && valorValido);
    }

    async find(_, res, middleware) {

        try {
            let livros = await livroModel.find().populate("autor", "nome").exec();
            res.send(new Response(200, livros).toString());
        } catch (error) {
            middleware(error);
        }
    }

    async findById(req, res, middleware) {
        try {
            let { id } = req.params;
            let livro = await livroModel.findById(id);

            if (!livro) {
                res.status(404).send(new Response(404, "Nenhum registro encontrado!").toString());
            } else {
                res.send(new Response(200, livro).toString());
            }

        } catch (error) {
            middleware(error);
        }
    }

    async findByTitulo(req, res, middleware) {
        try {
            let { titulo } = req.query;
            let livros = await livroModel.find({ "titulo": titulo });

            console.log(`livros ${livros}`);

            if (!livros || livros == "") {
                res.status(404).send(new Response(404, "Nenhum registro encontrado!").toString());
            } else {
                res.status(200).send(new Response(200, livros).toString()).json();
            }

        } catch (error) {
            middleware(error);
        }
    }

    async insert(req, res, middleware) {
        try {

            if (!this.validarEstrutura(req)) {
                res.status(400).send(new Response(400, "estrutura inválida!").toString());
            } else {
                let livro = new livroModel(req.body);
                await livro.save();
                res.status(201).send(livro.toJSON()).toString();
            }

        } catch (error) {
            middleware(error);
        }
    }

    async update(req, res, middleware) {
        try {
            let { id } = req.params;
            await livroModel.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).send(new Response(200, "Atualizado com sucesso!").toString());
        } catch (error) {
            middleware(error);
        }
    }

    async destroy(req, res, middleware) {
        try {
            let { id } = req.params;
            await livroModel.findByIdAndDelete(id);
            res.status(200).send(new Response(200, "Excluido com sucesso!").toString());
        } catch (error) {
            middleware(error);
        }
    }
}

export default new LivroService();

