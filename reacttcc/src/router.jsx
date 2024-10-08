import { BrowserRouter, Route, Routes } from "react-router-dom";
import './global.scss'
import Rodape from './components/rodape/rodape.jsx';
import Cabecalho from './components/cabecalho/cabecalho.jsx';
import CardProduto from './components/card-produto/cardProduto.jsx';
import Inicio from "./inicio/inicio.jsx";
import Contato from "./contato/contato.jsx";
import Login from "./login/login.jsx";
import AddUnidade from "./adicionar-unidade/adicionar-unidade.jsx";


export default function Navegacao(){

    return(

        <BrowserRouter>
            <Routes>
              <Route path='/rodape' element={<Rodape/>} />
              <Route path='/cabecalho' element={<Cabecalho />} />
              <Route path='/cardProduto' element={<CardProduto/>} />
              <Route path='/' element={<Inicio/>} />
              <Route path='/contato' element={<Contato/>} />
              <Route path='/login' element={<Login  />} />
              <Route path='/addunidade' element={<AddUnidade  />} />
         </Routes>
      </BrowserRouter>

    )

}