export class Response {
    #statusCode;
    #mensagem;

    constructor(statusCode, mensagem) {
        this.#statusCode = statusCode;
        this.#mensagem = mensagem;
    }

    get statusCode() {
        return this.#statusCode;
    }

    set statusCode(statusCode) {
        this.#statusCode = statusCode;
    }

    get mensagem() {
        return this.#mensagem;
    }

    set mensagem(mensagem) {
        this.#mensagem = mensagem;
    }

    toString() {
        return `{"statuscode":${this.#statusCode}, "mensagem": "${this.#mensagem}"}`;
    }
}