import { deletarCliente } from "../../repository/clienteRepository.js";


export default async function deletarClienteService(id){

    let LinhasAfetadas = await deletarCliente(id)

    if(LinhasAfetadas == 0){

        throw new Error('nenhum cliente encontrado !')
    }


}