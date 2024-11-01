
import alterarProdutoService from "../service/produto/alterarProdutoService.js";
import consultarProdutoService from "../service/produto/consultarProdutoService.js";
import deletarProdutoService from "../service/produto/deletarProdutoService.js";
import inserirProdutoService from "../service/produto/inserirProdutoService.js";

import consultarProdutoOrdemAlfabeticaService from "../service/produto/consultarProdutoOrdemAlfabeticoService.js";
import consultarProdutoIdService from "../service/produto/consultarProdutoIdService.js";
import consultarProdutoDoceService from "../service/produto/consultarProdutoDoceService.js";
import consultarProdutoSalgadoService from "../service/produto/consultarProdutoSalgadoService.js";
import consultarProdutoDietService from "../service/produto/consultarProdutoDietService.js";
import consultarProdutoZeroAcucarService from "../service/produto/consultarProdutoZeroAcucarService.js";

import { autenticar } from "../utils/jwts.js";

import { Router } from "express"
const endpoints = Router();



import multer from 'multer';

const upload = multer({ dest: 'uploads/' }); 

endpoints.post('/produto', upload.single('foto'), async (req, resp) => {
    try {
        if (!req.file) {
            return resp.status(400).send({ erro: 'Arquivo de imagem não enviado' });
        }

        let unidade = req.body;

        if ([produto.nomeproduto || produto.categoria || produto.descricao || produto.zeroacucar || produto.diet || produto.precoKg ]) {
            return resp.status(400).send({ erro: 'Todos os campos devem ser preenchidos' });
        }

        unidade.foto = req.file.path; 
        let id = await  inseriProdutoService(produto);  
        resp.send({ novoId: id });
    } catch (err) {
        console.error(err);  
        resp.status(400).send({
            erro: err.message
        });
    }
});

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











// filtros do produtos 

endpoints.get('/produto/ordemAlfabetica', autenticar, async (req, resp) =>{
    try{
        let produto = await consultarProdutoOrdemAlfabeticaService();
        resp.send(produto);
    }
    catch(err){
        resp.status(400).send({
            erro : err.message
        })
    }
})

// ESTOUY EM DUVIDA MANO NESSA AQUI 
endpoints.get('/produto/:id', autenticar, async (req, resp) =>{
    try{
        let id = req.params.id

        let produto = await consultarProdutoIdService(id);
        resp.send(produto[0]);
    }
    catch(err){
        resp.status(400).send({
            erro : err.message
        })
    }
})


endpoints.get('/produto/doce', autenticar, async (req, resp) =>{
    try{
        let produto = await consultarProdutoDoceService();
        resp.send(produto);
    }
    catch(err){
        resp.status(400).send({
            erro : err.message
        })
    }
})


endpoints.get('/produto/salgado', autenticar, async (req, resp) =>{
    try{
        let produto = await consultarProdutoSalgadoService();
        resp.send(produto);
    }
    catch(err){
        resp.status(400).send({
            erro : err.message
        })
    }
})


endpoints.get('/produto/diet', autenticar, async (req, resp) =>{
    try{
        let produto = await consultarProdutoDietService();
        resp.send(produto);
    }
    catch(err){
        resp.status(400).send({
            erro : err.message
        })
    }
})


endpoints.get('/produto/zeroAcucar', autenticar, async (req, resp) =>{
    try{
        let produto = await consultarProdutoZeroAcucarService();
        resp.send(produto);
    }
    catch(err){
        resp.status(400).send({
            erro : err.message
        })
    }
})





export default endpoints;