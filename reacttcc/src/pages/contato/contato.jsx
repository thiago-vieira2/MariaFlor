import './contato.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import { useState } from 'react';

function Contato(){

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
  
  const handleDownload = () => {
    // URL do PDF que você deseja baixar
    const pdfUrl = './documents/Política de Privacidade Front Company.pdf';
    
    // Criando um link temporário para download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'Política de Privacidade Front Company.pdf'); // Nome do arquivo ao ser baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const [nome,setNome] = useState('')
  const [email,setEmail] = useState('')
  const [telefone,setTelefone] = useState('')
  const [cep,setCep] = useState('')
  const [descricao,setDescricao] = useState('')

  const [politica,setPolitica] = useState(false)

    return (
    <div className="pagina-contato">
      <header className="cabecalho">
        <Cabecalho/>
      </header>

        <img className='cappuccino' src="./images/cappuccino.jpg" alt=""  />

        <h1>Deixe sua mensagem</h1>

      <div className='interativo'>
        <div className='cima'>
          <div className='campos'>
            <input placeholder='Nome' type="text" value={nome} onChange={e => setNome(e.target.value)}/>
            <input placeholder='E-Mail' type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            <input placeholder='Tel. ex.: (XX) X XXXX-XXXX' type="text" value={telefone} onChange={e => setTelefone(e.target.value)}/>
            <input placeholder='CEP' type="text" value={cep} onChange={e => setCep(e.target.value)}/>
          </div>

          <div className='imagem' {...dragEvents}>
            
            <p>Arraste seu anexo para este campo</p>

          </div>
        </div>
        <div className='mensagem'>
          <textarea placeholder='Insira aqui sua mensagem' type="text" value={descricao} onChange={e => setDescricao(e.target.value)}/>
        </div>
        <div className='politica'>
          <div className='escrita'>
             <p>Declaro que li e estou de acordo com a </p> <a href="" onClick={handleDownload}> Política de Privacidade </a> <p>da Maria Flor.</p>
          </div>
          <input type="checkbox" />
          </div>

        <button>Enviar</button>
      </div>

      
        <Rodape/>
    </div>  
  );
}

export default Contato;
