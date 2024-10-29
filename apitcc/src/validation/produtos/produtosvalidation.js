
export  function validarCamposObrigatoriosProdutos(produto){

    if(!produto.nomeproduto){
        throw new Error('Nome do produto obrigatório')

    }
    if(!produto.categoria){
        throw new Error('Categoria do produto obrigatório')

    }
    if(!produto.descricao){
        throw new Error('Descrição do produto obrigatório')

 

    }
    if(isNaN(produto.zeroAcucar)){

            throw new Error('valor do campo inválido')
     }

     if(isNaN(produto.diet)){

        throw new Error('valor do campo inválido')
 }

 if(!produto.precoKg){
    throw new Error('Produtos do produto obrigatório')

}

 
 
     
}