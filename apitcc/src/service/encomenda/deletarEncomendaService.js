import { deletarEncomendas } from "../../repository/encomendasRepository.js";


export default async function deletarEncomendasService(id){

    let LinhasAfetadas = await deletarEncomendas(id)

    if(LinhasAfetadas == 0){

        throw new Error('nenhuma encomenda encontrada !')
    }


}