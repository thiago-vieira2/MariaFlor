import './cardProduto.scss';

function CardProduto() {
  return (
    <div className="card">
      <span className="card__number">#62</span>
      <div className="card__image">
        <img src="./images/delicia_chocolate.png" alt="Delicia de Chocolate" />
      </div>
      <div className="card__content">
        <h3 className="card__title">Delicia de Chocolate</h3>
      </div>
    </div>
  );
}

export default CardProduto
