import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema(
    {
        id: {type: String},
        nomeFantasia: {type: String, required: true},
        razãoSocial: {type: String},
        endereço: {type: String},
        Telefone: {type: String}
    },
    {
        versionKey: false
    }
)

const editoras = mongoose.model("editoras", editoraSchema)

export default editoras