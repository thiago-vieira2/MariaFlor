import { buscarEncomendas } from "../../repository/encomendasRepository.js";


export default async function buscarEncomendasService(){

    let registros = await buscarEncomendas()

    return registros


}