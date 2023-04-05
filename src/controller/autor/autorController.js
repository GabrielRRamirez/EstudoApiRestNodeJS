import AutorService from "../../service/autor/autorService.js";

class AutorController {

    async find(req, res, middleware) {
        AutorService.find(req, res, middleware);
    }

    async findById(req, res, middleware) {
        AutorService.findById(req, res, middleware);
    }

    async insert(req, res, middleware) {
        AutorService.insert(req, res, middleware);
    }

    async update(req, res, middleware) {
        AutorService.update(req, res, middleware);
    }

    async destroy(req, res, middleware) {
        AutorService.destroy(req, res, middleware);
    }
}

export default new AutorController();