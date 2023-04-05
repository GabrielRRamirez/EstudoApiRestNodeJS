import RecursoNaoEncontradoError from "../../errors/RecursoNaoEncontradoError.js";
import AutorModel from "../../models/autor/autorModel.js";
import { Response } from "../../models/response/response.js";

class AutorService {

    async find(_, res, middleware) {
        try {
            let autores = await AutorModel.find();
            new Response(200, autores).enviarResposta(res);
        } catch (error) {
            middleware(error);
        }
    }

    async findById(req, res, middleware) {
        try {
            let { id } = req.params;
            let autor = await AutorModel.findById(id);

            if (!autor) {
                middleware(new RecursoNaoEncontradoError("Autor não encontrado!"));
            } else {
                new Response(200, autor).enviarResposta(res);
            }

        } catch (error) {
            middleware(error);
        }
    }

    async insert(req, res, middleware) {
        try {
            let autor = new AutorModel(req.body);
            autor.save();
            new Response(201, "Inserido com sucesso!").enviarResposta(res);

        } catch (error) {
            middleware(error);
        }
    }

    async update(req, res, middleware) {
        try {
            let { id } = req.params;
            await AutorModel.findByIdAndUpdate(id, { $set: req.body });
            new Response(200, "Atualizado com sucesso!").enviarResposta(res);
        } catch (error) {
            middleware(error);
        }
    }

    async destroy(req, res, middleware) {
        try {
            let { id } = req.params;
            await AutorModel.findByIdAndDelete(id);
            new Response(200, "Excluído com sucesso!").enviarResposta(res);
        } catch (error) {
            middleware(error);
        }
    }
}

export default new AutorService();