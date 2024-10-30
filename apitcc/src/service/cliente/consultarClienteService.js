import { buscarCliente } from "../../repository/clienteRepository.js";


export default async function buscarClienteService(){

    let registros = await buscarCliente()

    return registros


}