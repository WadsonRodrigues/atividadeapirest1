import mongoose from "mongoose";



const livrosSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        editora: {type: mongoose.Schema.Types.ObjectId, ref: 'editoras', required: true},
        numeropaginas: {type: Number}
    },
    {
        versionKey: false
    }
)

const livros = mongoose.model('livros', livrosSchema)

export default livros 