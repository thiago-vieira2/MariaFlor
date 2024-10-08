import './contato.scss';
import Cabecalho from '../components/cabecalho/cabecalho.jsx';

function Contato() {
  return (
    <div className="pagina-contato">
      <header className="cabecalho">
        <Cabecalho/>
      </header>

      <div className="fundo">
        <img className='churros' src="./images/churros.jpg" alt=""  />
      </div>
    </div>
  );
}

export default Contato;
