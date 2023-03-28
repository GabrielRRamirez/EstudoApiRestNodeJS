import mongoose from 'mongoose'

let livroSchema = mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        valor: {type: Number, required: true}
    }
)

let livroModel = mongoose.model('livros', livroSchema);

export default livroModel;