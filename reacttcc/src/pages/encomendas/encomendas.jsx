import './encomendas.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import CardEncomenda from '../../components/card-encomenda/cardEncomenda.jsx';

const encomendas = [
  {
    "id": 1,
    "status":"Pendente",
    "nome":"Bernardo",
    "contato":"11983008066",
    "data_entrega":"30/05/2025",
    "hora_entrega":"15:30",
    "forma_pagamento":"Crédito",
    "descricao":"1x coxinha de costela, 1x bolo de cenoura",
    "valor":"120,00"
  },

  {
    "id": 2,
    "status":"Con",
    "nome":"Bernardo",
    "contato":"11983008066",
    "data_entrega":"30/05/2025",
    "hora_entrega":"15:30",
    "forma_pagamento":"Crédito",
    "descricao":"1x coxinha de costela, 1x bolo de cenoura",
    "valor":"120,00"
  },

  {
    "id": 3,
    "status":"Pendente",
    "nome":"Bernardo",
    "contato":"11983008066",
    "data_entrega":"30/05/2025",
    "hora_entrega":"15:30",
    "forma_pagamento":"Crédito",
    "descricao":"1x coxinha de costela, 1x bolo de cenoura",
    "valor":"120,00"
  }
]

function Encomendas() {
  return (
    <div className="encomendas">
      <header className="principal">
        <Cabecalho/>
      </header>
        
    <div className='conteudo'>
        
        <a className='add' href="/addencomenda"> <img src="./images/add.png" alt="" width={30}/> Adicionar nova encomenda <img src="./images/encomenda.png" alt="" width={30}/></a>
        
        <div className='faixa'>
          <h2>Encomendas</h2>
          <select name="status">
            <option value="todos">Todos</option>
            <option value="concluidos">Concluídos</option>
            <option value="pendentes">Pendentes</option>
            <option value="cancelados">Cancelados</option>
          </select>
        </div>

        <div className='cards-encomendas'>
        {encomendas.map(e => <CardEncomenda
            id={e.id}
            nome={e.nome}
            contato={e.contato}
            data_entrega={e.data_entrega}
            hora_entrega={e.hora_entrega}
            forma_pagamento={e.forma_pagamento}
            descricao={e.descricao}
            valor={e.valor}
            />)}
          
        </div>

    </div>

      <footer>
        <Rodape/>
      </footer> 
    </div>
  );
}

export default Encomendas;
