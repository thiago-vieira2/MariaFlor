import * as db from '../repository/encomendasRepository.js'

import{Router} from "express"
const endpoints = Router();

endpoints.post('/encomendas/', async (req, resp) =>{
    try{
        let encomendas = req.body
        let id = await db.inserirEncomendas(encomendas)
        resp.send({
            idEncomendas: id
        })
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/encomendas', async (req, resp) =>{
    try{
        let encomendas = await db.BuscarEncomendas();
        resp.send(encomendas);
    }
    catch(err){
        resp.status(400).send({
            erro : err.message
        })
    }
})

endpoints.put('/encomendas/:id', async (req, resp)=> {
    try{
        let idEncomendas = req.params.id;
        let encomendas = req.body;

        let LinhasAfetadas = await db.alterarEncomendas(encomendas, idEncomendas);
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


endpoints.delete('/encomendas/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let LinhasAfetadas = await db.deletarEncomendas(id);
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