import './cabecalho.scss';

function Cabecalho() {
  return (
    <div className="cabecalho">
      <header className="principal">
        <img src="./images/mariaflor_c_logo.png" alt="logo" width={220}/>
        <nav>
          <a href="./">Inicio</a>
          <a href="/produtos">Produtos</a>
          <a href="/encomendas">Encomendas</a>
          <a href="/unidades">Unidades</a>
          <a href="/contato">Contato</a>
          <a href="">Estoque</a>
          <a href="">Dashboard</a>
        </nav>
        <a className='botao-adm'><img src="./images/user.png" alt="ADM" width={34.5}/> ADM</a>
      </header>
    </div>
  );
}

export default Cabecalho;
