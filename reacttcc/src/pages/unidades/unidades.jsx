import './unidades.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import CardUnidade from '../../components/card-unidade/cardUnidade.jsx';

const unidades = [
  {
    "img": "./images/doceria.jpg",
    "endereco": "Av. José Ribeiro Junqueira, 670 - Jardim Colonial, São Paulo - SP, 04821-020",
    "abre": "09:00",
    "fecha": "17:30",
    "url": "https://maps.app.goo.gl/iQHXHL2ioas8Z14WA"
  },

  {
    "img": "./images/doceria.jpg",
    "endereco": "Av. José Ribeiro Junqueira, 670 - Jardim Colonial, São Paulo - SP, 04821-020",
    "abre": "09:00",
    "fecha": "17:30",
    "url": "https://maps.app.goo.gl/iQHXHL2ioas8Z14WA"
  },

  {
    "img": "./images/doceria.jpg",
    "endereco": "Av. José Ribeiro Junqueira, 670 - Jardim Colonial, São Paulo - SP, 04821-020",
    "abre": "09:00",
    "fecha": "17:30",
    "url": "https://maps.app.goo.gl/iQHXHL2ioas8Z14WA"
  },
]

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
        </div>

        <div className='cards'>
        {unidades.map(u => <CardUnidade
            img={u.img}
            endereco={u.endereco}
            abre={u.abre}
            fecha={u.fecha}
            url={u.url}
            />)}
        </div>
    </div>

      <footer>
        <Rodape/>
      </footer> 
    </div>
  );
}

export default Unidades;
