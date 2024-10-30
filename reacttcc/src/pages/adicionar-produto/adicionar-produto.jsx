import './adicionar-produto.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function AddProduto() {

  async function salvar() {
    let paramCorpo = {
      "img":img,
      "nomeproduto":nomeproduto,
      "categoria":categoria,
      "descricao":descricao,
      "zeroacucar":zeroacucar,
      "diet":diet,
      "precoKg":precoKg
    }

    const url = 'http://localhost:5020/produto';
    let resp = await axios.post(url, paramCorpo);

    alert(resp);
}

  const [img,setImg] = useState('')
  const [nomeproduto,setNomeProduto] = useState('')
  const [descricao,setDescricao] = useState('')
  const [zeroacucar,setZeroacucar] = useState(false)
  const [diet,setDiet] = useState(false)
  const [categoria,setCategoria] = useState('')
  const [precoKg, setPrecoKg] = useState(Number)
  
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
          const img = document.createElement("img");
          img.src = event.target.result;
          img.classList.add("picture__img");

          pictureImageRef.current.innerHTML = "";
          pictureImageRef.current.appendChild(img);
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
    <div className="add-prod">
      <header className="cabecalho">
        <Cabecalho/>
      </header>

      <div className='conteudo'>
        <div className="barra">
          <h1>Adicionar Produtos</h1>
        </div>

        <div className="adicionar" >
          <div className='imagem'>
            <label className="picture" htmlFor="picture__input" tabIndex="0">
              <span className="picture__image" ref={pictureImageRef}></span>
            </label>
            <input type="file" value={img} onChange={e => setImg(e.target.value)} name="picture__input" id="picture__input" ref={inputFileRef} />
          </div>

          <div className="interativo">
            <div className="inputs">
              <input className='titulo-produto' type="text" placeholder="Título do Produto" value={nomeproduto} onChange={e => setNomeProduto(e.target.value)}/>

              <select name="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
                <option value="salgado">Salgado</option>
                <option value="doce">Doce</option>
              </select>

              <textarea type="text" placeholder='Adicone uma descição ao produto' value={descricao} onChange={e => setDescricao(e.target.value)}/>
              
              <div className='baixo'>
                <div className='inputs-check'>
                  
                  <div className='zero'>
                    <label >É Zero Açucar?</label>
                    <input type="checkbox" checked={zeroacucar} onChange={e => setZeroacucar(e.target.checked)}/>
                  </div>

                  <div className='diet'>
                    <label>É Diet?</label>
                    <input type="checkbox" checked={diet} onChange={e => setDiet(e.target.checked)}/>
                  </div>
                </div>
                
                <input className="preco" type="number" placeholder='Preço/Kg' value={precoKg} onChange={e => setPrecoKg(e.target.value)} />

                <button onClick={salvar} >Adicionar</button>
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