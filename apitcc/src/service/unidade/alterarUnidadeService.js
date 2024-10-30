import { alterarUnidade } from "../../repository/unidadeRepository.js";
import { validarCamposObrigatoriosUnidade } from "../../validation/unidade/unidadeValidation.js";

export default async function alterarUnidadeService(unidade, idUnidade){

    validarCamposObrigatoriosUnidade(unidade, idUnidade)

    let LinhasAfetadas = await alterarUnidade(unidade, idUnidade)

    if(LinhasAfetadas == 0){
        throw new Error('nenhuma unidade alterada');
    }

}