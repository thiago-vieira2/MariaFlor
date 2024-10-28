import './adicionar-encomenda.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import { useState, useEffect, useRef } from 'react';

function AddEncomenda() {

  const [endereco,setEndereco] = useState('')
  const [abre,setAbre] = useState('')
  const [fecha,setFecha] = useState('')
  const [url,setUrl] = useState('')


  return (
    <div className="add-encomenda">
      <header className="cabecalho">
        <Cabecalho/>
      </header>

      <div className='resto'>

        <div className="card-encomenda">
      <header> 
        <h2>Adicionar nova Encomenda</h2>
      </header>

      <div className='conteudo-encomenda'>
        <div className='informacoes'>
          <p><strong>Nome:</strong> <input type="text"/></p>
          <p><strong>Contato:</strong> <input type="text"/></p>
          <p><strong>Data da Entrega:</strong> <input className='data' type="date"/></p>
          <p><strong>Hora da Entrega:</strong> <input type="time"/></p>
          <p><strong>Forma de Pagamento:</strong> <input type="text" className='forma-pagamento' placeholder='ex.: Dinheiro'/></p>
        </div>

        <div className='descricao'>
          <div className='campo'>
            <h2>Descrição</h2>
            <textarea className='mensagem'></textarea>
          </div>
          <div className='preco'>
            <h2>Total: R$</h2> <input type="number" className='valor' />
          </div>
          <button>Adicionar</button>
        </div>
      </div>
      </div>
      </div>
      <div className="rodape">
        <Rodape/>
      </div>
    </div>
  );
}

export default AddEncomenda;