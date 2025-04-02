import React from "react";
import { Link } from "react-router-dom";

function Sobre() {
  return (
    
    <div className="background">
      
        <h1 className="Titulo2">Catálogo de Livros</h1>
       <h3 className="subtitulo"> 
        Bem-vindo ao nosso sistema 
        de gerenciamento da biblioteca municipal. Aqui,
        você pode explorar nosso catálogo de livros disponíveis 
        </h3>
        <h3 className="subtitulo">
        Nosso sistema permite uma organização eficiente dos livros,
        facilitando a busca o empréstimo e a renovação. Você pode encontrar rapidamente o que precisa.
        </h3>
        <div>
        <button className="button">
          <Link target="blank" className="a" to={"/Serviço"}>⮟</Link> </button>

        </div>
    </div>
  );
}

export default Sobre;
