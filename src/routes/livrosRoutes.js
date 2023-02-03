import express from "express"
import livroController from "../controllers/livrosController.js"


const router = express.Router()

router 
    .get("/livros", livroController.listarLivros)
    .get("/livros/busca", livroController.listarLivroPorEditora) 
    .get("/livros/:id", livroController.listarLivroPorId) 
    .post("/livros", livroController.cadastrarLivros)
    .put("/livros/:id", livroController.atualizarLivros)
    .delete("/livros/:id", livroController.excluirLivro) 


export default router