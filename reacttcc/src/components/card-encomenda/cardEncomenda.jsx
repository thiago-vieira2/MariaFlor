import './cardEncomenda.scss';

function CardEncomenda({id,status,nome,contato,data_entrega,hora_entrega,forma_pagamento,descricao,valor}) {

  function Concluir(){
    
    }
    
  function Cancelar(){
    
    }

  return (
    <div className="card-encomenda">
      <header> 
        <p className='id'>#{id}</p> 
        <div className='status-class'> 
          <p>{status}</p>
          <div className='bolinha'></div>
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

            <div className='botoes'>
              <button onClick="Concluir" className='concluir'>Concluir</button>
              <button  onClick="Cancelar" className='cancelar'>Cancelar</button>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default CardEncomenda
