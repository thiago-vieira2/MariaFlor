import { inserirCliente } from "../../repository/clienteRepository.js";
import { validarCamposObrigatoriosClientes } from "../../validation/cliente/clienteValidation.js";

export default async function inserirClienteService(cliente){

    validarCamposObrigatoriosClientes(cliente)

    let id = await inserirCliente(cliente);

    return id;

}