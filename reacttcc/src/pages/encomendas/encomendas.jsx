import './encomendas.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import CardEncomenda from '../../components/card-encomenda/cardEncomenda.jsx';



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
          <CardEncomenda/>
          <CardEncomenda/>
          
        </div>

    </div>

      <footer>
        <Rodape/>
      </footer> 
    </div>
  );
}

export default Encomendas;
