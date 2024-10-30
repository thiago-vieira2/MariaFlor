import { alterarCliente } from "../../repository/clienteRepository.js";

export default async function alterarClienteService(cliente, idCliente){

    let LinhasAfetadas = await alterarCliente(cliente, idCliente)

    if(LinhasAfetadas == 0){
        throw new Error('nenhum cliente alterado');
    }

}