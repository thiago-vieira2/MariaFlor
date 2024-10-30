import { inserirCliente } from "../../repository/clienteRepository.js";

export default async function inserirClienteService(cliente){

    let id = await inserirCliente(cliente);

    return id;

}