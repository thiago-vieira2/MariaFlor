import clienteController from './controller/clienteController.js'
import estoqueController from './controller/estoqueController.js' 
import produtoController from './controller/produtoController.js'
import unidadeController from './Controller/unidadeController.js'
import encomendasController from './Controller/encomendasController.js'

export default function adicionarRotas(servidor){
    
   servidor.use(clienteController)
   servidor.use(estoqueController)
   servidor.use(produtoController)
   servidor.use(unidadeController)
   servidor.use(encomendasController)
 
 
}