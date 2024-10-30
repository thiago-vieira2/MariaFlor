import { buscarProduto } from "../../repository/produtoRepository.js";


export default async function buscarProdutoServices(){

    let registros = await buscarProduto()

    return registros


}