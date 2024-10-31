import { alterarStatus } from "../../repository/encomendasRepository.js";


export default async function alterarStatusService(status, idEncomendas){


    let LinhasAfetadas = await alterarStatus(status, idEncomendas)

    if(LinhasAfetadas == 0){
        throw new Error('nenhuma encomenda alterada');
    }

}