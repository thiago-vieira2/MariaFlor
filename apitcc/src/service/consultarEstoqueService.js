import { consultarEstoqueService } from "../repository/estoqueRepository";

export default async function consultarEstoqueService(id){

    let registros = await consultarEstoqueService(id);

    let estoque= registros[0];

    return estoque;
    
}