import { inserirUnidade } from "../../repository/unidadeRepository.jd";

export default async function inseriUnidadeService(unidade){

    let id = await inserirUnidade(unidade);

    return id;

}