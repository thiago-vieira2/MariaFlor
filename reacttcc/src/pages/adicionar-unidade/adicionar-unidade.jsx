import './adicionar-unidade.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function AddUnidade() {
  const [img, setImg] = useState('');
  const [endereco, setEndereco] = useState('');
  const [abre, setAbre] = useState('');
  const [fecha, setFecha] = useState('');
  const [url, setUrl] = useState('');

  const inputFileRef = useRef(null);
  const pictureImageRef = useRef(null);
  const pictureImageTxt = "Buscar imagem no dispositivo";

  async function salvar() {
    let paramCorpo = {
      img: img,
      endereco: endereco,
      abre: abre,
      fecha: fecha,
      url: url, // Aqui, 'url' já é a variável de estado
    };

    const apiUrl = 'http://localhost:5020/unidades'; // Mudei 'url' para 'apiUrl' para evitar confusão
    try {
      let resp = await axios.post(apiUrl, paramCorpo);
      alert(resp.data); // Exibe a resposta da API
    } catch (error) {
      console.error("Erro ao salvar unidade:", error);
      alert("Erro ao salvar unidade.");
    }
  }

  useEffect(() => {
    pictureImageRef.current.innerHTML = pictureImageTxt;

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const imgElement = document.createElement("img");
          imgElement.src = event.target.result;
          imgElement.classList.add("picture__img");

          pictureImageRef.current.innerHTML = "";
          pictureImageRef.current.appendChild(imgElement);
        };
        reader.readAsDataURL(file);
      } else {
        pictureImageRef.current.innerHTML = pictureImageTxt;
      }
    };

    const inputFile = inputFileRef.current;
    inputFile.addEventListener("change", handleFileChange);

    return () => {
      inputFile.removeEventListener("change", handleFileChange);
    };
  }, []);

  return (
    <div className="add-uni">
      <header className="cabecalho">
        <Cabecalho />
      </header>

      <div className='resto'>
        <div className="barra">
          <h1>Adicionar Unidades Maria Flor</h1>
        </div>

        <div className="adicionar">
          <div className='imagem'>
            <label className="picture" htmlFor="picture__input" tabIndex="0">
              <span className="picture__image" ref={pictureImageRef}></span>
            </label>
            <input
              type="file"
              name="picture__input"
              id="picture__input"
              ref={inputFileRef}
              onChange={e => {
                setImg(e.target.value); // Este valor não será o correto para a imagem, considere usar um estado diferente.
              }}
            />
          </div>

          <div className="interativo">
            <div className="inputs">
              <div className="endereco">
                <img src="./images/localizacao.png" alt="" width={20} />
                <input
                  type="text"
                  placeholder="Insira o endereço do estabelecimento"
                  value={endereco}
                  onChange={e => setEndereco(e.target.value)}
                />
              </div>

              <div className="funcionamento">
                <img src="./images/relogio.png" alt="" width={17} />
                <p>Horário de Funcionamento:</p>
                <input
                  type="time"
                  value={abre}
                  onChange={e => setAbre(e.target.value)}
                />
                <p>ás</p>
                <input
                  type="time"
                  value={fecha}
                  onChange={e => setFecha(e.target.value)}
                />
              </div>
            </div>

            <div className="baixo">
              <div className="maps">
                <img src="./images/maps.png" alt="" width={20} />
                <input
                  type="url"
                  placeholder='URL da Localização da Empresa no Google Maps'
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
              </div>

              <button onClick={salvar}>Adicionar</button>
            </div>
          </div>
        </div>
      </div>

      <div className="rodape">
        <Rodape />
      </div>
    </div>
  );
}

export default AddUnidade;
