import './cardProduto.scss';

function CardProduto({id,img,nomeproduto,categoria,descricao,precoKg,abrir}) {
  

  return (
    <div onClick={()=>abrir(id,img,nomeproduto,categoria,descricao,precoKg)} href="" className="card-produto">
      <span className="card-numero">#{id}</span>
      <div className="card-imagem">
        <img src={img}/>
      </div>
      <div className="card-container">
        <h3 className="card-titulo"> {nomeproduto} </h3>
      </div>
    </div>
  );
}

export default CardProduto
