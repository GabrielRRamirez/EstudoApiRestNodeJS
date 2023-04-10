import { Response } from "../../models/response/response.js";
import livroModel from "../../models/livro/livroModel.js";
import RecursoNaoEncontradoError from "../../errors/RecursoNaoEncontradoError.js";

class LivroService {

    async find(_, res, middleware) {

        try {
            let livros = await livroModel.find().populate("autor", "nome").exec();
            new Response(200, livros).enviarResposta(res);
        } catch (error) {
            middleware(error);
        }
    }

    async findById(req, res, middleware) {
        try {
            let { id } = req.params;
            let livro = await livroModel.findById(id);

            if (!livro) {
                middleware(new RecursoNaoEncontradoError("Livro não encontrado!"));
            } else {
                new Response(200, livro).enviarResposta(res);
            }

        } catch (error) {
            middleware(error);
        }
    }

    async findByTitulo(req, res, middleware) {
        try {
            let { titulo } = req.query;
            let livros = await livroModel.find({ titulo: new RegExp(titulo, "i")});

            console.log(`livros ${livros}`);

            if (!livros || livros == "") {
                middleware(new RecursoNaoEncontradoError("Nenhum livro encontrado!"));
            } else {
                new Response(200, livros).enviarResposta(res);
            }

        } catch (error) {
            middleware(error);
        }
    }

    async insert(req, res, middleware) {
        try {
            let livro = new livroModel(req.body);
            await livro.save();
            new Response(201, livro).enviarResposta(res);

        } catch (error) {
            middleware(error);
        }
    }

    async update(req, res, middleware) {
        try {
            let { id } = req.params;
            await livroModel.findByIdAndUpdate(id, { $set: req.body });
            new Response(200, "Atualizado com sucesso!").enviarResposta(res);
        } catch (error) {
            middleware(error);
        }
    }

    async destroy(req, res, middleware) {
        try {
            let { id } = req.params;
            await livroModel.findByIdAndDelete(id);
            new Response(200, "Excluido com sucesso!").enviarResposta(res);
        } catch (error) {
            middleware(error);
        }
    }
}

export default new LivroService();

