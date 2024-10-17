import './adicionar-unidade.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';

function AddUnidade() {
  return (
    <div className="add-uni">
      <header className="cabecalho">
        <Cabecalho/>
      </header>
      <div className="barra">
        <h1>Adicionar Unidades Maria Flor</h1>
      </div>

      <div className="adicionar" >
        <div className="add-image" >

        </div>
        <div className="interativo">

        <div className="inputs">
            <div className="endereco">
              <img src="./images/localizacao.png" alt="" width={30} /><input type="text" placeholder="Insira o endereço do estabelecimento" />
            </div>

            <div className="funcionamento">
              <img src="./images/relogio.png" alt="" width={17} /> <p>Horário de Funcionamento: </p><input type="time"/><p>ás</p><input type="time" />
            </div>
        </div>

        <div className="baixo">
          <div className="maps">
            <img src="./images/maps.png" alt="" /><input type="text" />
          </div>
          
          <button>Adicionar</button>
        </div>
        </div>
      </div>
      <div className="rodape">
        <Rodape/>
      </div>
    </div>
  );
}

export default AddUnidade;