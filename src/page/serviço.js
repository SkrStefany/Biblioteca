import React from "react";
import { Link } from "react-router-dom";

function Serviço() {
  return (
    
    <div className="container">
        <div className="T2">
            <h1>Escolha seu Serviço !!</h1>
        </div>
        <div className="serviços">
        <button className="textob"> <Link target="blank" className="textob" to={"/Catalogo"}>Catálogo Online</Link> </button>
        <button className="textob"> Empréstimo / Renovação </button>
        <button className="textob"> Contato </button>

        </div>
        
        
      
    </div>
  );
}

export default Serviço;
