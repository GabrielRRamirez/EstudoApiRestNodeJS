import mongoose from "mongoose";

let livroSchema = mongoose.Schema(
    {
        id: { type: String },
        titulo: {
            type: String,
            required: [true, "O título é um campo obrigatório"]
        },
        valor: {
            type: Number,
            required: [true, "O valor é um campo obrigatório"],
            validate: {
                validator: (value) => {
                    return value >= 10 && value <= 50000.0;
                },
                message: "O valor deve estar entre R$10,00 e R$50.000,00"
            }
        },
        autor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "autor",
            required: [true, "Autor é um campo obrigatório"]
        },
        editora: {
            type: String,
            required: [true, "A editora é um campo obrigatório"],
            enum: {
                values: ["Casa do código", "Alura", "Dev Dojo"],
                message: "A Editora informada não é válida"
            }
        }
    }
);

let livroModel = mongoose.model("livros", livroSchema);

export default livroModel;