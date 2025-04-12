import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from '../src/page/home';
import Sobre from '../src/page/Sobre';
import Serviço from "../src/page/serviço";
import Catalogo from "../src/page/catalogo";
import DetalhesLivro from "../src/page/detalhesLivro";
import Contato from "../src/page/contato";
import Emprestimo from "../src/page/emprestimo";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Sobre' element={<Sobre/>} />
      <Route path="/Serviço" element={<Serviço/>} />
      <Route path="/Catalogo" element={<Catalogo/>} />
      <Route path="/livro/:id" element={<DetalhesLivro />} />
      <Route path="/contato" element={<Contato/>} />
      <Route path="/emprestimo" element={<Emprestimo/>} />
      
      
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
