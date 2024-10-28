import PaginaProduto from '../pagina-produto/paginaProduto';
import './cardProduto.scss';


function CardProduto({id,titulo,descricao,img,abrir}) {
  

  return (
    <div onClick={()=>abrir(id, titulo, descricao, img)} href="" className="card-produto">
      <span className="card-numero">#{id}</span>
      <div className="card-imagem">
        <img src= {img}/>
      </div>
      <div className="card-container">
        <h3 className="card-titulo"> {titulo} </h3>
      </div>
    </div>
  );
}

export default CardProduto
