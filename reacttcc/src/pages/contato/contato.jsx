import './contato.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';



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
            <input placeholder='Nome' type="text" />
            <input placeholder='E-Mail' type="text" />
            <input required pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" placeholder="Tel. ex.: 11 99999-9999" type="tel"/>
            <input placeholder='CEP' type="text" />
          </div>

          <div className='imagem' {...dragEvents}>
            
            <p>Arraste seu anexo para este campo</p>

          </div>
        </div>
        <div className='mensagem'>
          <textarea placeholder='Insira aqui sua mensagem' name="" id=""></textarea>
        </div>
        <div className='politica'>
            <div className='escrita'>
              <p>Declaro que li e estou de acordo com a </p> <a href="" onClick={handleDownload}> Política de Privacidade </a> <p>da Maria Flor.</p>
            </div>
            <input type="checkbox" />
          </div>

        <button>Enviar</button>
      </div>

      <footer className='rodape'>
        <Rodape/>
      </footer>
    </div>  
  );
}

export default Contato ;
