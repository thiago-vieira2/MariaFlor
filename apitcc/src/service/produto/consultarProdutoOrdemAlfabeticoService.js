import { filtrarProdutoOrdemAlfabetica } from "../../repository/produtoRepository.js";

export default async function consultarProdutoOrdemAlfabeticaService() {
    
    let registros = await filtrarProdutoOrdemAlfabetica()
    
    return registros
}