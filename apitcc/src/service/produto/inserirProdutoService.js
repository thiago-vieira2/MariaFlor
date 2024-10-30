import { inserirProduto } from "../../repository/produtoRepository.js";

export default async function inserirProdutoService(produto){

    let id = await inserirProduto(produto);

    return id;

}