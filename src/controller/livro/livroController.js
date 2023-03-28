import LivroService from "../../service/livro/livroService.js";

class LivroController {
    
    find(req, res) {
        LivroService.find(req, res);
    }

    findById(req, res) {
        LivroService.findById(req, res);
    }

    insert(req, res) {
        LivroService.insert(req, res);
    }

    update(req, res) {
        LivroService.update(req, res);
    }

    destroy(req, res) {
        LivroService.destroy(req, res);
    }
}

export default new LivroController();