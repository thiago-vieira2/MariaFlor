import './rodape.scss';

function Rodape() {
  return (
    <div className="rodape">
      <footer className="principal">
        <img className="logo" src="./images/mariaflor_logo.png" alt="" width={180} />
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
          <img className='insta' src="./images/insta.png" alt="" width={50}/>
          <img className="face" src="./images/face.png" alt="" width={50}/>
          <img className='wpp' src="./images/wpp.png" alt="" width={50}/>
        </div>
      </footer>
    </div>
  );
}

export default Rodape;
