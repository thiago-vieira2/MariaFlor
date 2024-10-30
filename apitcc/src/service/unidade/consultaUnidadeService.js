import { buscarUnidade } from "../../repository/unidadeRepository.js"

export default async function buscarUnidadeService(){

    let registros = await buscarUnidade()

    return registros


}