import ErroBase from "./ErroBase.js";

export default class DadosInvalidosError extends ErroBase {
    constructor() {
        super(400, "Um ou mais dados fornecidos são inválidos!");
    }
}