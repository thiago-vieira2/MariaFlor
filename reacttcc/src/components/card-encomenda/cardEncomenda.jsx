import { useState } from 'react';
import './cardEncomenda.scss';

function CardEncomenda({ id, status, nome, contato, data_entrega, hora_entrega, forma_pagamento, descricao, valor }) {

  const [status2, setStatus] = useState('pendente')

  function Concluir() {

    setStatus("concluido")
    

  

  }

  function Cancelar() {

    setStatus("cancelado")
  }


  function Pendente() {
    setStatus("pendente")
  }

  const estilo = {
    pendende: {
      backgroundColor: 'yellow',
      color: 'yellow'
    },
    concluido: {
      backgroundColor: 'green',
      color: 'green'

    },
    cancelado: {
      backgroundColor: 'red',
      color: 'red'
    }
  }

  const estiloLetra = {
    pendende: {
      color: 'yellow'
    },
    concluido: {
      color: 'green'

    },
    cancelado: {
      color: 'red'
    }
  }

  const estiloBolinha = estilo[status2]
  const estiloPalavra = estiloLetra[status2]

  return (
    <div className="card-encomenda">
      <header>
        <p className='id'>#{id}</p>
        <div className='status-class' >
          <p style={estiloPalavra} >{status2}</p>
          <div className='bolinha' style={estiloBolinha}></div>
        </div>
      </header>

      <div className='conteudo-encomenda'>
        <div className='informacoes'>
          <p><strong>Nome:</strong> {nome}</p>
          <p><strong>Contato:</strong> {contato}</p>
          <p><strong>Data da Entrega:</strong> {data_entrega}</p>
          <p><strong>Hora da Entrega:</strong> {hora_entrega}</p>
          <p><strong>Forma de Pagamento:</strong> {forma_pagamento}</p>
        </div>

        <div className='descricao'>
          <div className='campo'>
            <h2>Descrição</h2>
            <div className='mensagem'>{descricao}</div>
          </div>

          <div className='baixo'>
            <div className='preco'>
              <h2>Valor:</h2> <div className='valor'> R${valor} </div>
            </div>

            {status2 == 'pendente' ?
              <div className='botoes'>

                <button onClick={Concluir} className='concluir'>Concluir</button>
                <button onClick={Cancelar} className='cancelar'>Cancelar</button>
              </div>
              :
              <div className='botoes'>

                <button onClick={Pendente} className='pendente'>Pendente</button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardEncomenda
