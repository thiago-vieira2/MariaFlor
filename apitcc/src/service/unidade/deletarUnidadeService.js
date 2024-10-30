import { deletarUnidade} from "../../repository/unidadeRepository.js";


export default async function deletarUnidade(id){

    let LinhasAfetadas = await deletarUnidade(id)

    if(LinhasAfetadas == 0){

        throw new Error('nenhuma unidade encontrada !')
    }


}