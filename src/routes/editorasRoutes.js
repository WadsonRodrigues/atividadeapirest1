import express from "express"
import EditoraController from "../controllers/editorasController.js"


const router = express.Router()

router 
    .get("/editoras", EditoraController.listarEditora)
    .post("/editoras", EditoraController.cadastrarEditora)
    .put("/editoras/:id", EditoraController.atualizarEditora)
    .get("/editoras/:id", EditoraController.listarEditoraPorId) 
    .delete("/editoras/:id", EditoraController.excluirEditora) 


export default router