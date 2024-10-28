import './cardEncomenda.scss';

function CardEncomenda() {
  return (
    <div className="card-encomenda">
      <header> 
        <p className='id'>#1</p> 
        <div className='status'> 
          <p>Pendente</p>
          <div className='bolinha'></div>
        </div>
      </header>

      <div className='conteudo-encomenda'>
        <div className='informacoes'>
          <p><strong>Nome:</strong> Bernardo Ferreira</p>
          <p><strong>Contato:</strong> (11) 98300-8066</p>
          <p><strong>Data da Entrega:</strong> 23/10</p>
          <p><strong>Hora da Entrega:</strong> 15:30</p>
          <p><strong>Forma de Pagamento:</strong> Crédito</p>
        </div>

        <div className='descricao'>
          <div className='campo'>
            <h2>Descrição</h2>
            <div className='mensagem'></div>
          </div>

          <div className='baixo'>
            <div className='preco'>
              <h2>Valor:</h2> <div className='valor'> <input type="number"/> </div>
            </div>

            <div className='botoes'>
              <button className='concluir'>Concluir</button>
              <button className='cancelar'>Cancelar</button>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default CardEncomenda
