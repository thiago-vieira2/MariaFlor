

export  function validarCamposObrigatoriosClientes(cliente){

    if(!cliente.nome){
        throw new Error('Nome do cliente obrigatório')

    }
    if(!cliente.email){
        throw new Error('Email do cliente obrigatório')

    }
    if(!cliente.telefone){
        throw new Error('Número de telefone cliente obrigatório')

    }
    if(!cliente.cpf){
        throw new Error('Número de CPF obrigatório')

    }
    // VALIDAR BOOLEANO
    // if(isNaN(cliente.(algum valor boolean))){

    //     throw new Error('valor inválida')

    // }
    
    
}


// export function validaClienteUnico(registros){

//     if(registros.length == 0){

//         throw new Error('Cliente não encontrado')

//     }

// }

 export function validarClienteIgual(info){

     if(info.length > 0){

         throw new Error('Já existe uma conta cadastrado com essas informações')

        }

}