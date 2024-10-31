
import alterarProdutoService from "../service/produto/alterarProdutoService.js";
import consultarProdutoService from "../service/produto/consultaProdutoService.js";
import deletarProdutoService from "../service/produto/deletarProdutoService.js";
import inserirProdutoService from "../service/produto/inserirProdutoService.js";
import { autenticar } from "../utils/jwts.js";

import { Router } from "express"
const endpoints = Router();





endpoints.post('/produto/', autenticar, async (req, resp) =>{
    try{
        let produto = req.body
        let id = await inserirProdutoService(produto)

        
        if (id == null){
            resp.send({ erro: "Usuario ou senha incorreta"})
        } else {
            let token = gerarToken(id)
            resp.send({
                "token": token
            })
        }
   
        
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})





endpoints.get('/produto', autenticar, async (req, resp) =>{
    try{
        let produto = await consultarProdutoService();
        resp.send(produto);
    }
    catch(err){
        resp.status(400).send({
            erro : err.message
        })
    }
})





endpoints.put('/produto/:id', autenticar, async (req, resp)=> {
    try{
        let idProduto = req.params.id;
        let produto = req.body;

        await alterarProdutoService(produto, idProduto);

        resp.send()  

    }
    catch(err){
        resp.status(400).send ({
            erro : err.message
        })
    }
})





endpoints.delete('/produto/:id', autenticar, async (req, resp) => {
    try{
        let id = req.params.id;
        await deletarProdutoService(id);

        resp.send()
    
    }
    catch (err){
        resp.status(400).send({
            erro : err.message
        })
    }
})

export default endpoints;