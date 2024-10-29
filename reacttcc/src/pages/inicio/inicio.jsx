import './inicio.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import CardProduto from '../../components/card-produto/cardProduto.jsx';
import PaginaProduto from '../../components/pagina-produto/paginaProduto.jsx';
import { useState } from 'react';

const produtos = [
  {
    "id": 3,
    "titulo": "Delícia de Chocolate",
    "descricao": "Conheça a Delícia de Chocolate: um bolo irresistível que combina camadas fofinhas de chocolate com um recheio generoso de brigadeiro. Finalizado com raspas de chocolate, é a sobremesa perfeita para quem busca o sabor ultimate do prazer!",
    "valor": "./images/delicia_chocolate.png",
    "img": "124,90"
  },

  {
    "id": 3,
    "titulo": "Delícia de Chocolate",
    "descricao": "Conheça a Delícia de Chocolate: um bolo irresistível que combina camadas fofinhas de chocolate com um recheio generoso de brigadeiro. Finalizado com raspas de chocolate, é a sobremesa perfeita para quem busca o sabor ultimate do prazer!",
    "valor": "./images/delicia_chocolate.png",
    "img": "124,90"
  },

  {
    "id": 3,
    "titulo": "Delícia de Chocolate",
    "descricao": "Conheça a Delícia de Chocolate: um bolo irresistível que combina camadas fofinhas de chocolate com um recheio generoso de brigadeiro. Finalizado com raspas de chocolate, é a sobremesa perfeita para quem busca o sabor ultimate do prazer!",
    "valor": "./images/delicia_chocolate.png",
    "img": "124,90"
  },

  {
    "id": 3,
    "titulo": "Delícia de Chocolate",
    "descricao": "Conheça a Delícia de Chocolate: um bolo irresistível que combina camadas fofinhas de chocolate com um recheio generoso de brigadeiro. Finalizado com raspas de chocolate, é a sobremesa perfeita para quem busca o sabor ultimate do prazer!",
    "valor": "./images/delicia_chocolate.png",
    "img": "124,90"
  },

  {
    "id": 3,
    "titulo": "Delícia de Chocolate",
    "descricao": "Conheça a Delícia de Chocolate: um bolo irresistível que combina camadas fofinhas de chocolate com um recheio generoso de brigadeiro. Finalizado com raspas de chocolate, é a sobremesa perfeita para quem busca o sabor ultimate do prazer!",
    "valor": "./images/delicia_chocolate.png",
    "img": "124,90"
  },

  {
    "id": 3,
    "titulo": "Delícia de Chocolate",
    "descricao": "Conheça a Delícia de Chocolate: um bolo irresistível que combina camadas fofinhas de chocolate com um recheio generoso de brigadeiro. Finalizado com raspas de chocolate, é a sobremesa perfeita para quem busca o sabor ultimate do prazer!",
    "valor": "./images/delicia_chocolate.png",
    "img": "124,90"
  },

  {
    "id": 3,
    "titulo": "Delícia de Chocolate",
    "descricao": "Conheça a Delícia de Chocolate: um bolo irresistível que combina camadas fofinhas de chocolate com um recheio generoso de brigadeiro. Finalizado com raspas de chocolate, é a sobremesa perfeita para quem busca o sabor ultimate do prazer!",
    "valor": "./images/delicia_chocolate.png",
    "img": "124,90"
  },

  {
    "id": 3,
    "titulo": "Delícia de Chocolate",
    "descricao": "Conheça a Delícia de Chocolate: um bolo irresistível que combina camadas fofinhas de chocolate com um recheio generoso de brigadeiro. Finalizado com raspas de chocolate, é a sobremesa perfeita para quem busca o sabor ultimate do prazer!",
    "valor": "./images/delicia_chocolate.png",
    "img": "124,90"
  },

  {
    "id": 3,
    "titulo": "Delícia de Chocolate",
    "descricao": "Conheça a Delícia de Chocolate: um bolo irresistível que combina camadas fofinhas de chocolate com um recheio generoso de brigadeiro. Finalizado com raspas de chocolate, é a sobremesa perfeita para quem busca o sabor ultimate do prazer!",
    "valor": "./images/delicia_chocolate.png",
    "img": "124,90"
  },
]

function Inicio() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  function abrir(id, titulo, descricao, valor, img) {
    setProdutoSelecionado({id, titulo, descricao, valor , img})
  }

  return (
    <div className="inicio">
      <header className="principal">
        <Cabecalho />
      </header>

      <div className='conteudo'>
        <div className='faixa'>
          <a href="/salgados"> <img src="./images/salgado.png" alt="" /></a>
          <a href="/doces"> <img src="./images/doce.png" alt="" /></a>
        </div>

        <h2 className='slogan'>"Maria Flor, o sabor está no amor"</h2>

        <div className='faixa-dois'>
          <p>Ordernar por</p>

          <select name="ordenar">
            <option value="todas">Todas as categorias</option>
            <option value="doces">Doces</option>
            <option value="salgados">Salgados</option>
            <option value="zeroacucar">Zero Açucar</option>
            <option value="diet">Diet</option>
            <option value="ordemalfabetica">Ordem Alfabética A-Z</option>
            <option value="ordemid">Número do ID</option>
          </select>
        </div>

        {produtoSelecionado && <PaginaProduto
          id={produtoSelecionado.id}
          titulo={produtoSelecionado.titulo}
          descricao={produtoSelecionado.descricao}
          img={produtoSelecionado.img}
          valor={produtoSelecionado.valor}
        />}

        <div className='cards'>
          <div className='add-card'>
            <a href="/addproduto"> <img src="./images/add.png" alt="" width={90} /> <h2>Adicionar Produto</h2></a>
          </div>

          {produtos.map(p => <CardProduto
            id={p.id}
            titulo={p.titulo}
            descricao={p.descricao}
            img={p.img}
            valor={p.valor}
            abrir={abrir} />)}
        </div>

      </div>
      <Rodape />
    </div>
  );
}

export default Inicio;
