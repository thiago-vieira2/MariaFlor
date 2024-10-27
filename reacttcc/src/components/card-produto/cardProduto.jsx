import './cardProduto.scss';

function CardProduto() {
  return (
    <div className="card-produto">
      <span className="card-numero">#62</span>
      <div className="card-imagem">
        <img src="./images/delicia_chocolate.png" alt="Delicia de Chocolate" />
      </div>
      <div className="card-container">
        <h3 className="card-titulo">Delicia de Chocolate</h3>
      </div>
    </div>
  );
}

export default CardProduto
