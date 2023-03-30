import mongoose from "mongoose";

const autorSchema = mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String}
    },
    {
        versionKey: false
    }
);

export default mongoose.model("autor", autorSchema);