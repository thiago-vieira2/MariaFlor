import { alterarCliente } from "../../repository/clienteRepository.js";
import { validarCamposObrigatoriosClientes } from "../../validation/cliente/clienteValidation.js";

export default async function alterarClienteService(cliente, idCliente){

    validarCamposObrigatoriosClientes(cliente, idCliente)

    let LinhasAfetadas = await alterarCliente(cliente, idCliente)

    if(LinhasAfetadas == 0){
        throw new Error('nenhum cliente alterado');
    }

}