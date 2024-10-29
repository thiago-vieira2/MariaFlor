import './cardUnidade.scss';
// import { Link, useNavigate } from 'react-router-dom';

// async function excluir(id, nome) {
//   const url = `http://localhost:5020/unidades/${id}?x-access-token=${token}`;
//   await axios.delete(url)

//   await buscar()
//   toast.success(`${nome} removido da lista de inimigos!`)
// }

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
            <img className='lixeira' src="./images/lixeira.png" alt="" width={25} height={25}/>
          </div>
        </div>  
    </div>
  );
}

export default CardUnidade
