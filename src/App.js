import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from '../src/page/home';
import Sobre from '../src/page/Sobre';
import Serviço from "../src/page/serviço";
import Catalogo from "../src/page/catalogo";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Sobre' element={<Sobre/>} />
      <Route path="/Serviço" element={<Serviço/>} />
      <Route path="/Catalogo" element={<Catalogo/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
