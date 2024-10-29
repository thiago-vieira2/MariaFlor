import './unidades.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import CardUnidade from '../../components/card-unidade/cardUnidade.jsx';



function Unidades() {
  return (
    <div className="unidades">
      <header className="principal">
        <Cabecalho/>
      </header>
        
    <div className='conteudo'>
         
        <div className='adicionar'>
            <a href="/addunidade">
                <img src="./images/add.png" alt="" width={30}/>
                <p>Adicionar nova unidade</p>
                <img src="./images/empresa.png" alt="" width={30}/>
            </a>

            <div className='cards'>
              <CardUnidade/>
            </div>
        </div>
    </div>

      <footer>
        <Rodape/>
      </footer> 
    </div>
  );
}

export default Unidades;
