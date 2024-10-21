import './adicionar-unidade.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import { useState } from 'react';

function AddUnidade() {

  const dragEvents = {
    onDragEnter: (e) => {
      e.preventDefault();
      console.log('onDragEnter')
    },

    onDragLeave: (e) => {
      e.preventDefault();
      (console.log('onDragLeave'));
    },

    onDragOver: (e) => {
      e.preventDefault();
      (console.log('onDragOver'));
    },
    onDrop: (e) => {
      e.preventDefault();
      (console.log('onDrop'));
    },
  }

  const [endereco,setEndereco] = useState('')
  const [abre,setAbre] = useState('')
  const [fecha,setFecha] = useState('')
  const [url,setUrl] = useState('')
  const [imagem, setImagem] = useState(null)
  
  function alterarImagem(e) {
    const file = e.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagem(reader.result);
        };

        reader.readAsDataURL(file);
    }
}

  return (
    <div className="add-uni">
      <header className="cabecalho">
        <Cabecalho/>
      </header>

      <div className='resto'>
        <div className="barra">
          <h1>Adicionar Unidades Maria Flor</h1>
        </div>

        <div className="adicionar" >
        <div className='imagem' {...dragEvents}> 
            <input type="file" placeholder='Procurar imagem no dispositivo' accept='image/*' onChange={alterarImagem}/>
            <i class='fa-solid fa-trash botao' onClick={() => setImagem(null)} />
        </div>

          <div className="interativo">

          <div className="inputs">
              <div className="endereco">
                <img src="./images/localizacao.png" alt="" width={20} /><input type="text" placeholder="Insira o endereço do estabelecimento" value={endereco} onChange={e => setEndereco(e.target.value)}/>
              </div>

              <div className="funcionamento">
                <img src="./images/relogio.png" alt="" width={17} /> <p>Horário de Funcionamento: </p><input type="time" value={abre} onChange={e => setAbre(e.target.value)}/><p>ás</p><input type="time"  value={fecha} onChange={e => setFecha(e.target.value)}/>
              </div>
          </div>

          <div className="baixo">
            <div className="maps">
              <img src="./images/maps.png" alt="" width={20} /><input type="text" placeholder='URL da Localização da Empresa no Google Maps'  value={url} onChange={e => setUrl(e.target.value)}/>
            </div>
            
            <button>Adicionar</button>

          </div>
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