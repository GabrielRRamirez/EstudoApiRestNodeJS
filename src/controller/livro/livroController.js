import LivroService from "../../service/livro/livroService.js";

class LivroController {
    
    find(req, res, middleware) {
        LivroService.find(req, res, middleware);
    }

    findById(req, res, middleware) {
        LivroService.findById(req, res, middleware);
    }

    findByTitulo(req, res, middleware) {
        LivroService.findByTitulo(req, res, middleware);
    }

    insert(req, res, middleware) {
        LivroService.insert(req, res, middleware);
    }

    update(req, res, middleware) {
        LivroService.update(req, res, middleware);
    }

    destroy(req, res, middleware) {
        LivroService.destroy(req, res, middleware);
    }
}

export default new LivroController();