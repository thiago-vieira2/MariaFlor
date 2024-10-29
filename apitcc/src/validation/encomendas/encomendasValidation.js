
export  function validarCamposObrigatoriosEncomendas(encomendas){

    if(!encomendas.nome){
        throw new Error('Nome da encomenda obrigatório')

    }
    if(!encomendas.contato){
        throw new Error('Contato do cliente obrigatório')

    }
    if(!encomendas.descricao){
        throw new Error('Descrição da encomenda obrigatório')

    }
    if(!encomendas.data_entrega){
        throw new Error('Data de entrega obrigatório')


    }

    if(!encomendas.forma_pagamento){
        throw new Error('Forma de pagamento da encomenda obrigatório')

    }
    if(!encomendas.valor){
        throw new Error('Valor da encomenda obrigatório')

    }}