import { consultarEncomendasFiltro } from "../../repository/encomendasRepository.js"


export default async function consultarEncomendasFiltroService(filtro){

    let registros = await consultarEncomendasFiltro(filtro)

    return registros


}