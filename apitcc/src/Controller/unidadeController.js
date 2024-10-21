import * as db from '../repository/unidadeRepository'
import { Router } from "express"
const endpoints = Router();

endpoints.post('/unidade/', async (req, resp) =>{
    try{
        let unidade = req.body
        let id = await db.inserirUnidade(unidade)

        resp.send({
            idunidade: id
        })
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/unidade', async (req, resp) =>{
    try{
        let unidade = await db.buscarUnidade();
        resp.send(unidade);
    }
    catch(err){
        resp.status(400).send({
            erro : err.message
        })
    }
})

endpoints.put('/unidade/:id', async (req, resp)=> {
    try{
        let id = req.params.id;
        let unidade = req.body;

        let LinhasAfetadas = await db.alterarUnidade(id, unidade);
        if (LinhasAfetadas >= 1){
            resp.send();
        }
        else {
            resp.status(404).send ({error: 'Nenhum registro encontrado'})
        }
    }
    catch(err){
        resp.status(400).send ({
            erro : err.message
        })
    }
})


endpoints.delete('/unidade/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let LinhasAfetadas = await db.deletarUnidade(id);
        if(LinhasAfetadas >= 1){
            resp.send();
        }
        else {
            resp.status(404).send({error: 'Nenhum registro encontrado'})
        }
    
    }
    catch (err){
        resp.status(400).send({
            erro : err.message
        })
    }
})


export default endpoints;