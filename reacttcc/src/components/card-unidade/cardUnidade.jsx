import './cardUnidade.scss';

import axios from 'axios'
  
import { Link} from 'react-router-dom';


function CardUnidade({img,endereco,abre,fecha,url}) {

  return (
    <div className="card-unidade">
        
          <img className="imagem" src="./images/doceria.jpg" alt="" width={200}/>

        <div className='resto-unidade'>
          <div className='cima'>
            <div className='loc'>
              <img src="./images/localizacao.png" alt="" width={20} height={20}/>
              <p>{endereco}</p>
            </div>
            <div className='hour'>
              <img src="./images/relogio.png" alt="" width={17} height={17}/>
              <p> Horário de Funcionamento: {abre} ás {fecha} </p>
            </div>
          </div>
          <div className='baixo'>
            <div className='maps'>
              <img src="./images/maps.png" alt="" width={20}/>
              <a href={url} target="_blank">Buscar Endereço em Google Maps</a>
            </div>

            {/* <Link onClick={() => excluir(item.id, item.nome)}>
            </Link> */}
            <Link ><img className='lixeira' src="./images/lixeira.png" alt="" width={25} height={25}/></Link>
          </div>
        </div>  
    </div>
  );
}

export default CardUnidade
