import './cardProduto.scss';


function CardProduto({id,titulo,descricao,img,valor,abrir}) {
  

  return (
    <div onClick={()=>abrir(id, titulo, descricao, img , valor)} href="" className="card-produto">
      <span className="card-numero">#{id}</span>
      <div className="card-imagem">
        <img src={valor}/>
      </div>
      <div className="card-container">
        <h3 className="card-titulo"> {titulo} </h3>
      </div>
    </div>
  );
}

export default CardProduto
