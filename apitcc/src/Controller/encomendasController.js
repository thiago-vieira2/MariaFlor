import inserirEncomendasService from "../service/encomenda/inserirEncomendasService.js";
import consultarEncomendaService from "../service/encomenda/consultarEncomendaService.js";
import alterarEncomendaService from "../service/encomenda/alterarEncomendaService.js";
import deletarEncomendasService from "../service/encomenda/deletarEncomendaService.js";


import { Router } from "express";
import alterarStatus from "../service/encomenda/alterarStatusService.js";
import alterarStatusService from "../service/encomenda/alterarStatusService.js";
import consultarEncomendasFiltroService from "../service/encomenda/consultarEncomendaFiltroService.js";
const endpoints = Router();

endpoints.post("/encomendas",  async (req, resp) => {
  try {
    let encomendas = req.body;
    let id = await inserirEncomendasService(encomendas);
    resp.send({
      idEncomendas: id,
    });
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});

endpoints.get("/encomendas",  async (req, resp) => {
  try {
    let encomendas = await consultarEncomendaService();
    resp.send(encomendas);
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});


endpoints.get("/encomendas-filtro/:filtro",  async (req, resp) => {
  try {
    let filtro= req.params.filtro
    let encomendas = await consultarEncomendasFiltroService(filtro);
    resp.send(encomendas);
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});



endpoints.put("/encomendas/:id",  async (req, resp) => {
  try {
    let idEncomendas = req.params.id;
    let encomendas = req.body;

    await alterarEncomendaService(encomendas, idEncomendas);
    resp.send();
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});

endpoints.put("/editar-status/:id", async (req, resp) => {
  try {
    let idEncomendas = req.params.id;
    let status = req.body;

    await alterarStatusService(status, idEncomendas);
    resp.send("oi");
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});

endpoints.delete("/encomendas/:id",  async (req, resp) => {
  try {
    let id = req.params.id;

    await deletarEncomendasService(id);

    resp.send();
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});

export default endpoints;
