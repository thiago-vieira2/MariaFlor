import './inicio.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import CardProduto from '../../components/card-produto/cardProduto.jsx';


function Inicio() {
  return (
    <div className="inicio">
      <header className="principal">
        <Cabecalho/>
      </header> 

    <div className='conteudo'>
      <div className='faixa'>
        <a href="/salgados"> <img src="./images/salgado.jpg" alt="" /></a>
        <a href="/doces"> <img src="./images/doce.avif" alt="" /></a>
      </div>

      <div className='cards'>
        <div className='add-card'>
          <a href=""> <img src="./images/add.png" alt="" width={90}/> <h2>Adicionar Produto</h2></a>
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

export default Inicio;
