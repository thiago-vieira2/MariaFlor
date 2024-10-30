import { alterarEncomendas } from "../../repository/encomendasRepository.js";

export default async function alterarEncomendaS(encomendas, idEncomendas){

    let LinhasAfetadas = await alterarEncomendaS(encomendas, idEncomendas)

    if(LinhasAfetadas == 0){
        throw new Error('nenhuma encomenda alterada');
    }

}