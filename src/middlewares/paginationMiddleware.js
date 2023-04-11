import DadosInvalidosError from "../errors/DadosInvalidosError.js";
import { Response } from "../models/response/response.js";

export default async function paginate(req, res, next) {

    try {
        let { limit = 10, page = 1, ordenation = "_id:1" } = req.query;

        let [ordenationField, order] = ordenation.split(":");

        limit = parseInt(limit);
        page = parseInt(page);
        order = parseInt(order);

        if (limit <= 0 || page <= 0) {
            next(new DadosInvalidosError());
        }

        let pagedResult = await req.result
            .find()
            .sort({ [ordenationField]: order })
            .skip((page - 1) * limit)
            .limit(limit)
            .exec();

        new Response(200, pagedResult).enviarResposta(res);

    } catch (error) {
        next(error);
    }
}