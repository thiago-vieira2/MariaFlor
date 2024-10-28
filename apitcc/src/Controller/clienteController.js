import * as db from '../repository/clienteRepository.js'

import { Router } from "express"
const endpoints = Router();



endpoints.post('/cliente/', async (req, resp) =>{
    try{
        let cliente = req.body
        let id = await db.inserirCliente(cliente)

        resp.send({
            idCliente: id
        })
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/cliente', async (req, resp) =>{
    try{
        let cliente = await db.buscarCliente();
        resp.send(cliente);
    }
    catch(err){
        resp.status(400).send({
            erro : err.message
        })
    }
})

endpoints.put('/cliente/:id', async (req, resp)=> {
    try{
        let idCliente = req.params.id;
        let cliente = req.body;

        let LinhasAfetadas = await db.alterarCliente(cliente, idCliente);
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


endpoints.delete('/cliente/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let LinhasAfetadas = await db.deletarCliente(id);
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