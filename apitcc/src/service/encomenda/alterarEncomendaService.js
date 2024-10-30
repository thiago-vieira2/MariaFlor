import { alterarEncomendas } from "../../repository/encomendasRepository.js";
import { validarCamposObrigatoriosEncomendas } from "../../validation/encomendas/encomendasValidation.js";

export default async function alterarEncomendaS(encomendas, idEncomendas){

    validarCamposObrigatoriosEncomendas(encomendas, idEncomendas)

    let LinhasAfetadas = await alterarEncomendas(encomendas, idEncomendas)

    if(LinhasAfetadas == 0){
        throw new Error('nenhuma encomenda alterada');
    }

}