import mongoose from "mongoose";

let livroSchema = mongoose.Schema(
    {
        id: {type: String},
        titulo: {
            type: String, 
            required: [true, "O título é um campo obrigatório"]
        },
        valor: {
            type: Number, 
            required: [true, "O valor é um campo obrigatório"]
        },
        autor: {
            type: mongoose.Schema.Types.ObjectId, 
            ref:"autor", 
            required: [true, "Autor é um campo obrigatório"]
        }
    }
);

let livroModel = mongoose.model("livros", livroSchema);

export default livroModel;