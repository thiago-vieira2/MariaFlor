import { alterarProduto } from "../../repository/produtoRepository.js";
import { validarCamposObrigatoriosProdutos } from "../../validation/produtos/produtosvalidation.js";

export default async function alterarProdutoService(produto, idProduto){

    validarCamposObrigatoriosProdutos(produto, idProduto)

    let LinhasAfetadas = await alterarProduto(produto, idProduto)

    if(LinhasAfetadas == 0){
        throw new Error('nenhum produto alterado');
    }

}