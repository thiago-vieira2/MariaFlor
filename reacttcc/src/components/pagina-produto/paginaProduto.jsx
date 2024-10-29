import './paginaProduto.scss';

function PaginaProduto({id, titulo, descricao, valor, img}) {
  return (
    <div className="pagina-produto">
        <header>
            <h1>#{id}</h1>
        </header>

        <div className='conteudo'>
            <img src={img}/>

            <div className='resto'>
              <h1>{titulo}</h1>
              <p className='descricao'>{descricao}</p>

              <div className='preco'>
                <h1>R${valor}</h1>
                <p>/kg</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default PaginaProduto
