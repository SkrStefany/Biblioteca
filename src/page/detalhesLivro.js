import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import '../index.css';

export default function DetalhesLivro() {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    fetch(`https://projetointegrador3.onrender.com/api/Livros/${id}`)
      .then((res) => res.json())
      .then((data) => setLivro(data))
      .catch((err) => console.error("Erro ao buscar detalhes:", err));
  }, [id]);

  if (!livro) return <p>Carregando detalhes...</p>;

  return (
    <div className="detalhes-container">
      <h2>{livro.titulo}</h2>
      <img
        src={livro.capa || "https://via.placeholder.com/150"}
        alt={livro.titulo}
        className="detalhes-capa"
      />
      <p><strong>Autor:</strong> {livro.autor}</p>
      <p><strong>Ano:</strong> {livro.ano}</p>
      <p><strong>Categoria:</strong> {livro.categoria?.nome}</p>
      <p><strong>Descrição:</strong> {livro.descricao}</p>
    </div>
  );
}
