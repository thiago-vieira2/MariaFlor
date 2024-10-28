import './produtos.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import CardProduto from '../../components/card-produto/cardProduto.jsx';


function Produtos() {
  return (
    <div className="produtos">
      <header className="principal">
        <Cabecalho/>
      </header> 

    <div className='conteudo'>
      <div className='prod'>
        <h1>Produtos</h1>
      </div>

      <div className='faixa'>
        <p>Ordernar por</p>

        <select name="ordenar">
          <option value="todas">Todas as categorias</option>
          <option value="doces">Doces</option>
          <option value="salgados">Salgados</option>
          <option value="zeroacucar">Zero Açucar</option>
          <option value="diet">Diet</option>
          <option value="ordemalfabetica">Ordem Alfabética A-Z</option>
          <option value="ordemid">Número do ID</option>
        </select>
      </div>

      <div className='cards'>
        <div className='add-card'>
          <a href="/addproduto"> <img src="./images/add.png" alt="" width={90}/> <h2>Adicionar Produto</h2></a>
        </div>
        <CardProduto/>
        <CardProduto/>
        <CardProduto/>
      </div>

      </div>
        <Rodape/>
      </div>
  );
}

export default Produtos;
