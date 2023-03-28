import AutorModel from '../../models/autor/autorModel.js'
import {Response} from '../../models/response/response.js'

class AutorService {

    validarEstrutura(req) {
        let { nome, nacionalidade } = req.body;

        let nomeValido = (nome !== undefined && nome !== '');
        let nacionalidadeValida = (nacionalidade !== undefined && nacionalidade !== '');

        return nomeValido && nacionalidadeValida;
    }

    async find(_, res) {
        try {
            let autores = await AutorModel.find();
            res.status(200).send(new Response(200, autores).toString());
        } catch (error) {
            res.status(500).send(new Response(500, error).toString());
        }
    }

    async findById(req, res) {
        try {
            let { id } = req.params;
            let autor = await AutorModel.findById(id);
            res.status(200).send(new Response(200, autor).toString());
        } catch (error) {
            res.status(500).send(new Response(500, error).toString());
        }
    }

    async insert(req, res) {
        try {
            if (!this.validarEstrutura(req)) {
                res.status(400).send(new Response(400, 'Estrutura inválida!').toString());
            } else {
                let autor = new AutorModel(req.body);
                autor.save();
                res.status(201).send(new Response(201, 'Inserido com sucesso!').toString());
            }
        } catch (error) {
            res.status(500).send(new Response(500, error).toString());
        }
    }

    async update(req, res) {
        try {
            let { id } = req.params;
            await AutorModel.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).send(new Response(200, 'Atualizado com sucesso!').toString());
        } catch (error) {
            res.status(500).send(new Response(500, error).toString());
        }
    }

    async destroy(req, res) {
        try {
            let { id } = req.params;
            await AutorModel.findByIdAndDelete(id);
            res.status(200).send(new Response(200, 'Excluído com sucesso!').toString());
        } catch (error) {
            res.status(500).send(new Response(500, error).toString());
        }
    }
}

export default new AutorService();