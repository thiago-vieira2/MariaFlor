import { filtrarProdutoZeroAcucar } from "../../repository/produtoRepository.js";

export default async function consultarProdutoZeroAcucarService() {
    
    let registros = await filtrarProdutoZeroAcucar()
    
    return registros
}