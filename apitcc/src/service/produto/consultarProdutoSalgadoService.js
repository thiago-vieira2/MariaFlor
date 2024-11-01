import { filtrarProdutoSalgados } from "../../repository/produtoRepository.js";

export default async function consultarProdutoSalgadoService() {
    
    let registros = await filtrarProdutoSalgados()
    
    return registros
}
