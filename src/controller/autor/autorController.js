import AutorService from "../../service/autor/autorService.js";

class AutorController {

    async find(req, res) {
        AutorService.find(req, res);
    }

    async findById(req, res) {
        AutorService.findById(req, res);
    }

    async insert(req, res) {
        AutorService.insert(req, res);
    }

    async update(req, res) {
        AutorService.update(req, res);
    }

    async destroy(req, res) {
        AutorService.destroy(req, res);
    }
}

export default new AutorController();