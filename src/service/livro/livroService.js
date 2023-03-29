import { Response } from "../../models/response/response.js";
import livroModel from '../../models/livro/LivroModel.js'

class LivroService {

    validarEstrutura(req) {
        let { titulo, valor } = req.body;
        let tituloValido = titulo !== undefined && titulo !== '';
        let valorValido = valor > 0;
        return (tituloValido && valorValido);
    }

    async find(_, res) {

        try {
            let livros = await livroModel.find().populate('autor', 'nome').exec();
            res.send(new Response(200, livros).toString());
        } catch (error) {
            res.status(501).send(new Response(501, error).toString()).json();
        }
    }

    async findById(req, res) {
        try {
            let { id } = req.params;
            let livro = await livroModel.findById(id);
            res.send(new Response(200, livro).toString());
        } catch (error) {
            res.status(501).send(new Response(501, error).toString()).json();
        }
    }

    async findByTitulo(req, res) {
        try {
            let {titulo} = req.query;
            let livros = await livroModel.find({'titulo' : titulo});
            res.status(200).send(new Response(200, livros).toString()).json();

        } catch(error) {
            res.status(501).send(new Response(501, error).toString()).json();
        }
    }

    async insert(req, res) {
        try {

            if (!this.validarEstrutura(req)) {
                res.status(400).send(new Response(400, 'estrutura inválida!').toString());
            } else {
                let livro = new livroModel(req.body);
                await livro.save();
                res.status(201).send(livro.toJSON()).toString();
            }

        } catch (error) {
            res.status(500).send(new Response(500, error).toString()).json();
        }
    }

    async update(req, res) {
        try {
            let {id} = req.params;
            await livroModel.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send(new Response(200, 'Atualizado com sucesso!').toString());
        } catch (error) {
            res.status(500).send(new Response(500, error).toString()).json();
        }
    }

    async destroy(req, res) {
        try {
            let {id} = req.params;
            await livroModel.findByIdAndDelete(id);
            res.status(200).send(new Response(200, 'Excluido com sucesso!').toString());
        } catch (error) {
            res.status(500).send(new Response(500, error).toString()).json();
        }
    }
}

export default new LivroService();

