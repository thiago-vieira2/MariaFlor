import './rodape.scss';

function Rodape() {
  return (
    <div className="rodape">
      <footer className="principal">
        <img className="logo" src="./images/mariaflor_logo.png" alt="" width={110} />
        <div className='meio'>
          <nav>
            <a href="">Sobre Nós</a>
            <a href="">Produtos</a>
            <a href="">Lojas</a>
            <a href="">Contato</a>
          </nav>
          <p>Maria Flor 2024 ©</p>
        </div>
        <div className='icons'>
          <a url="instagram.com"><img className='insta' src="./images/insta.png" alt=""/></a>
          <a href=""><img className="face" src="./images/face.png" alt=""/></a>
          <a href=""><img className='wpp' src="./images/wpp.png" alt=""/></a>
        </div>
      </footer>
    </div>
  );
}

export default Rodape;
