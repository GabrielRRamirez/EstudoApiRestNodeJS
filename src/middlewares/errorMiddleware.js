import mongoose from "mongoose";
import { Response } from "../models/response/response.js";

// eslint-disable-next-line no-unused-vars
export default function send(error, req, res, _) {

    switch (error) {
    case error instanceof mongoose.Error.CastError:
        res.status(400).send(new Response(400, "Um ou mais dados fornecidos são inválidos!").toString());
        break;
    
    case error instanceof mongoose.Error.ValidationError:
        res.status(400).send(new Response(400, "Estrutura de arquivos inválida!").toString());
        break;
    default:
        res.status(500).send(new Response(500, error).toString());
    }
}