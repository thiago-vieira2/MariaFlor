import './cabecalho.scss';

function Cabecalho() {
  return (
    <div className="cabecalho">
      <header className="principal">
        <img src="./images/mariaflor_c_logo.png" alt="logo" width={240}/>
        <nav>
          <a href="./inicio">Inicio</a>
          <a href="">Produtos</a>
          <a href="">Lojas</a>
          <a href="./contato">Contato</a>
          <a href="">Estoque</a>
          <a href="">Dashboard</a>
        </nav>
        <a className='botao-adm'><img src="./images/user.png" alt="ADM" width={34.5}/>ADM</a>
      </header>
    </div>
  );
}

export default Cabecalho;
