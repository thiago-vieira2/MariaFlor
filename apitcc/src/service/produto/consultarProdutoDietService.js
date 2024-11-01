import { filtrarProdutoDiet } from "../../repository/produtoRepository.js";

export default async function consultarProdutoDietService() {
    
    let registros = await filtrarProdutoDiet()
    
    return registros
}