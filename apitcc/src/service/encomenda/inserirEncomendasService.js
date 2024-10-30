import { inserirEncomendas } from "../../repository/encomendasRepository.js";
import { validarCamposObrigatoriosEncomendas } from "../../validation/encomendas/encomendasValidation.js";

export default async function inserirEncomendasService(encomendas){

    validarCamposObrigatoriosEncomendas(encomendas)

    let id = await inserirEncomendas(encomendas);

    return id;

}