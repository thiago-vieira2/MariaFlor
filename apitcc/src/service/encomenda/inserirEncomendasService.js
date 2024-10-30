import { inserirEncomendas } from "../../repository/encomendasRepository.js";

export default async function inserirEncomendasService(encomendas){

    let id = await inserirEncomendas(encomendas);

    return id;

}