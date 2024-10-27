import { BrowserRouter, Route, Routes } from "react-router-dom";
import './global.scss'

import Rodape from './components/rodape/rodape.jsx';
import Cabecalho from './components/cabecalho/cabecalho.jsx';
import CardProduto from './components/card-produto/cardProduto.jsx';
import Inicio from "./pages/inicio/inicio.jsx";
import Contato from "./pages/contato/contato.jsx";
import Login from "./pages/login/login.jsx";
import AddUnidade from "./pages/adicionar-unidade/adicionar-unidade.jsx";
import Unidades from "./pages/unidades/unidades.jsx";
import CardEncomenda from "./components/card-encomenda/cardEncomenda.jsx";
import Encomendas from "./pages/encomendas/encomendas.jsx"; 

export default function Navegacao(){

    return(

        <BrowserRouter>
            <Routes>
              <Route path='/rodape' element={<Rodape/>} />
              <Route path='/cabecalho' element={<Cabecalho />} />
              <Route path='/cardProduto' element={<CardProduto/>} />
              <Route path='/cardEncomenda' element={<CardEncomenda/>} />
              <Route path='/' element={<Inicio/>} />
              <Route path='/contato' element={<Contato/>} />
              <Route path='/login' element={<Login  />} />
              <Route path='/addunidade' element={<AddUnidade  />} />
              <Route path='/unidades' element={<Unidades/>} />
              <Route path='/encomendas' element={<Encomendas/>} />

         </Routes>
      </BrowserRouter>

    )

}