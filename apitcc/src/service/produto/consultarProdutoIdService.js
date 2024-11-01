import { filtrarProdutoPorId } from "../../repository/produtoRepository.js";


export default async function consultarProdutoIdService(id){

    let registros = await filtrarProdutoPorId(id);

    let produto = registros[0];

    return produto;
    
}