import './adicionar-encomenda.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios'


function AddEncomenda() {

  async function salvar() {
    let paramCorpo = {
      "nome":nome,
      "contato":contato,
      "descricao":descricao,
      "data_entrega":dataEntrega,
      "hora_entrega":horaEntrega,
      "forma_pagamento":formaPagamento,
      "valor":valor,
      "status": "Pendente"
    }

    const url = 'http://localhost:7000/encomendas';
    let resp = await axios.post(url, paramCorpo);

    alert(resp);
}

  const [nome,setNome] = useState('')
  const [contato,setContato] = useState('')
  const [descricao,setDescricao] = useState('')
  const [dataEntrega,setDataEntrega] = useState('')
  const [horaEntrega,setHoraEntrega] = useState('')
  const [formaPagamento, setFormaPagamento] = useState('')
  const [valor, setValor] = useState('')
  


  return (
    <div className="add-encomenda">
      <header className="cabecalho">
        <Cabecalho/>
      </header>

      <div className='resto'>

        <div className="card-encomenda">
      <header> 
        <h2>Adicionar nova Encomenda</h2>
      </header>

      <div className='conteudo-encomenda'>
        <div className='informacoes'>
          <div className='inputs'><p><strong>Nome:</strong></p> <input type="text" value={nome} onChange={e => setNome(e.target.value)}/></div>
          <div className='inputs'><p><strong>Contato:</strong></p> <input type="text" value={contato} onChange={e => setContato(e.target.value)}/></div>
          <div className='inputs'><p><strong>Data da Entrega:</strong></p> <input className='data' type="date" value={dataEntrega} onChange={e => setDataEntrega(e.target.value)}/></div>
          <div className='inputs'><p><strong>Hora da Entrega:</strong></p> <input type="time" value={horaEntrega} onChange={e => setHoraEntrega(e.target.value)}/></div>
          <div className='inputs'><p><strong>Forma de Pagamento:</strong></p> <input type="text" className='forma-pagamento' placeholder='ex.: Dinheiro' value={formaPagamento} onChange={e => setFormaPagamento(e.target.value)}/></div>
        </div>

        <div className='descricao'>
          <div className='campo'>
            <h2>Descrição</h2>
            <textarea className='mensagem' value={descricao} onChange={e => setDescricao(e.target.value)}></textarea>
          </div>
          <div className='preco'>
            <h2>Total: R$</h2> <input type="number" className='valor' value={valor} onChange={e => setValor(e.target.value)}/>
          </div>
          <button onClick={salvar} >Adicionar</button>
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

export default AddEncomenda;