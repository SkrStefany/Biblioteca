import React from "react";

import { Link } from "react-router-dom";

import '../index.css';

import Fundo from '../img/fundo.png';
import Logo from '../img/logo.png';





function Home() {
  return (

     /* CABEÇALHO */
    <div className="container">
      <div className="header">
        <div className="Logo">
        <img src={Logo} alt="Logo" />
        </div>
        <h1 className="Titulo">  Biblioteca Municipal  </h1>
      </div>

      {/* CORPO */}
      <div className="body">
        <h4>  Bem-vindo à Biblioteca Municipal  </h4>
        <h6 className="subtitulo">  Organização e Acesso aos Livros   </h6>
        <button className="button"> <Link target="blank" className="a" to={"/Sobre"}>ACESSAR BIBLIOTECA</Link>
          </button>
      </div>
      
    </div>
  );
}

export default Home;
