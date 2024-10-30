import { consultarProduto } from "../../repository/produtoRepository.js";


export default async function consultarProdutoService(){

    let registros = await consultarProduto()

    return registros


}