import './inicio.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';


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
    </div>

      <Rodape/>
    </div>
  );
}

export default Inicio;
