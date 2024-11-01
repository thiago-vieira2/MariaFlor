import './adicionar-produto.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Aviso from '../../components/aviso/aviso.jsx';
import { useNavigate } from 'react-router-dom';

function AddProduto() {

  const [img, setImg] = useState('');
  const [nomeproduto, setNomeProduto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [zeroacucar, setZeroacucar] = useState(false);
  const [diet, setDiet] = useState(false);
  const [categoria, setCategoria] = useState('');
  const [precoKg, setPrecoKg] = useState(0);
  const inputFileRef = useRef(null);
  const pictureImageRef = useRef(null);
  const pictureImageTxt = "Buscar imagem no dispositivo";
  
  useEffect(() => {
    pictureImageRef.current.innerHTML = pictureImageTxt;
    
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setImg(event.target.result); // Atualiza o estado `img` com o resultado base64
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
    
    return () => inputFile.removeEventListener("change", handleFileChange);
  }, []);

  const navigate = useNavigate()
  async function salvar() {

      let paramCorpo = {
        "img": img,
        "nomeproduto": nomeproduto,
        "categoria": categoria,
        "descricao": descricao,
        "zeroacucar": zeroacucar,
        "diet": diet,
        "precoKg":parseFloat(precoKg)
      };

    const url = 'http://localhost:7000/produto';
    let resp = await axios.post(url, paramCorpo);
    setAbrirAviso(true)
    setmensagemAviso('Produto adiconado com sucesso!')
    setAvisoTipo('success')
    setTimeout(() => navigate("/produtos"), 3000);

  }

  const [mensagemAviso, setmensagemAviso] = useState('')
  const [AbrirAviso, setAbrirAviso] = useState(false)
  const [AvisoTipo, setAvisoTipo] = useState('')
  const FecharAviso = () => {
    setmensagemAviso('');
};


  return (
    <div className="add-prod">
        <Aviso
          message={mensagemAviso}
          onClose={FecharAviso}
          duration={3000}
          type={AvisoTipo}
        />

      <header className="cabecalho">
        <Cabecalho/>
      </header>

      <div className='conteudo'>
        <div className="barra">
          <h1>Adicionar Produtos</h1>
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
            />
          </div>

          <div className="interativo">
            <div className="inputs">
              <input className='titulo-produto' type="text" placeholder="Título do Produto" value={nomeproduto} onChange={e => setNomeProduto(e.target.value)}/>

              <select name="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
                <option value="salgado">Salgado</option>
                <option value="doce">Doce</option>
              </select>

              <textarea type="text" placeholder='Adicione uma descrição ao produto' value={descricao} onChange={e => setDescricao(e.target.value)}/>
              
              <div className='baixo'>
                <div className='inputs-check'>
                  <div className='zero'>
                    <label>É Zero Açúcar?</label>
                    <input type="checkbox" checked={zeroacucar} onChange={e => setZeroacucar(e.target.checked)}/>
                  </div>

                  <div className='diet'>
                    <label>É Diet?</label>
                    <input type="checkbox" checked={diet} onChange={e => setDiet(e.target.checked)}/>
                  </div>
                </div>
                
                <input className="preco" type="number" placeholder='Preço/Kg' value={precoKg} onChange={e => setPrecoKg(e.target.value)} />

                <button onClick={salvar}>Adicionar</button>
              </div>
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

export default AddProduto;
