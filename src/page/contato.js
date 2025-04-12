import React from "react";

const Contato = () => {
    return (
        <div className="container" style={{ padding:'100px' }}>
            <h1 className="catalog-title">Contato</h1>
            <p className="catalog-title">Entre em contato com a nossa livraria através dos seguintes meios:</p>
            <ul className="catalog-title" style={{ listStyleType: 'none', padding: 0 }}>
                <li><strong>Telefone:</strong> (11) 9999-9999</li>
                <li><strong>Email:</strong> contato@livraria.com</li>
            </ul>
        </div>
    );
};

export default Contato;