import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from '../src/page/home';
import Sobre from '../src/page/Sobre';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Sobre' element={<Sobre/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
