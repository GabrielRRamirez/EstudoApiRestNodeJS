import mongoose from "mongoose";

const autorSchema = mongoose.Schema(
    {
        id: {type: String},
        nome: {
            type: String, 
            required: [true, "O nome do(a) autor(a) é obrigatório"]
        },
        nacionalidade: {type: String}
    },
    {
        versionKey: false
    }
);

export default mongoose.model("autor", autorSchema);