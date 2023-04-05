import ErroBase from "./ErroBase.js";

export default class RecursoNaoEncontradoError extends ErroBase {
    constructor(mensagem = "Recurso não encontrado") {
        super(404, mensagem);
    }
}