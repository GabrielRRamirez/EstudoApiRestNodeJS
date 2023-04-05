import RecursoNaoEncontradoError from "../errors/RecursoNaoEncontradoError.js";

// eslint-disable-next-line no-unused-vars
export default function recursoNaoEncontrado(req, res, next) {
    next(new RecursoNaoEncontradoError());
}