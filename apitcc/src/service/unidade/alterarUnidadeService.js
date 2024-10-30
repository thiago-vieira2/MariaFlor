import { alterarUnidade } from "../../repository/unidadeRepository.js";

export default async function alterarUnidade(unidade, idUnidade){

    let LinhasAfetadas = await alterarUnidade(unidade, idUnidade)

    if(LinhasAfetadas == 0){
        throw new Error('nenhuma unidade alterada');
    }

}