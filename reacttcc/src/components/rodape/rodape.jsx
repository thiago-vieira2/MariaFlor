import './rodape.scss';

function Rodape() {
  return (
    <div className="rodape">
      <footer className="principal">
        <img className="logo" src="./images/mariaflor_logo.png" alt="Logo Maria Flor" width={110} />
        <div className='meio'>
          <nav>
            <a href="">Sobre nós</a>
            <a href="/produtos">Produtos</a>
            <a href="/unidades">Lojas</a>
            <a href="/contato">Contato</a>
          </nav>
          <p>Maria Flor 2024 ©</p>
        </div>
        <div className='icons'>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img className='insta' src="./images/insta.png" alt="Instagram" />
          </a>
          <a href="">
            <img className="face" src="./images/face.png" alt="Facebook" />
          </a>
          <a href="">
            <img className='wpp' src="./images/wpp.png" alt="WhatsApp" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Rodape;
