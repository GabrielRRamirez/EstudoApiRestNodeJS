import mongoose from "mongoose";
import ErroBase from "../errors/ErroBase.js";
import DadosInvalidosError from "../errors/DadosInvalidosError.js";
import EstruturaInvalidaError from "../errors/EstruturaInvalidaError.js";
import RecursoNaoEncontradoError from "../errors/RecursoNaoEncontradoError.js";

// eslint-disable-next-line no-unused-vars
export default function send(error, req, res, _) {

    if (error instanceof mongoose.Error.CastError) {
        new DadosInvalidosError().enviarResposta(res);

    } else if (error instanceof mongoose.Error.ValidationError) {
        new EstruturaInvalidaError(error).enviarResposta(res);
    } else if (error instanceof RecursoNaoEncontradoError) {
        error.enviarResposta(res);
    }
    else {
        new ErroBase().enviarResposta(res);
    }
}