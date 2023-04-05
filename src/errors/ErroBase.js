export default class ErroBase extends Error {
    constructor(status = 500, message = "Erro interno do servidor") {
        super();

        this.message = message;
        this.status = status;
    }

    enviarResposta(res) {
        res.status(this.status).send({
            status: this.status,
            message: this.message
        });
    }
}