import ErroBase from "./ErroBase.js";

export default class EstruturaInvalidaError extends ErroBase {
    constructor(error) {
        super(400, `Estrutura de arquivos inválida: ${Object.values(error.errors)
            .map(err => err.message)
            .join(";")
        }`);
    }
}