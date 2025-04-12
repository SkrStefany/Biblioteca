import { useState } from "react";     
import '../TelaEmprestimoRenovacao.css';


const livrosDisponiveis = [
  { id: 1, titulo: "O Hobbit", autor: "J.R.R. Tolkien", disponivel: true },
  { id: 2, titulo: "1984", autor: "George Orwell", disponivel: true },
  { id: 3, titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: false },
];

const meusEmprestimos = [
  {
    id: 1,
    titulo: "O Hobbit",
    dataEmprestimo: "10/04/2025",
    dataDevolucao: "20/04/2025",
    status: "Em dia",
    renovavel: true,
  },
  {
    id: 2,
    titulo: "1984",
    dataEmprestimo: "01/04/2025",
    dataDevolucao: "10/04/2025",
    status: "Atrasado",
    renovavel: false,
  },
];

export default function TelaEmprestimoRenovacao() {
  const [busca, setBusca] = useState("");

  const livrosFiltrados = livrosDisponiveis.filter((livro) =>
    livro.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="capa">
      <h1 className="titulo">Sistema de Empréstimo de Livros</h1>
      <div className="tabs">
        <button className="tab" onClick={() => setBusca("emprestimos")}>
          Meus Empréstimos
        </button>
        <button className="tab" onClick={() => setBusca("novo")}>Novo Empréstimo</button>
      </div>

      {busca !== "novo" ? (
        <div className="lista">
          {meusEmprestimos.map((livro) => (
            <div key={livro.id} className="card">
              <div className="info">
                <p className="livro">{livro.titulo}</p>
                <p>Empréstimo: {livro.dataEmprestimo}</p>
                <p>Devolução: {livro.dataDevolucao}</p>
                <p className={livro.status === "Atrasado" ? "atrasado" : "emdia"}>
                  Status: {livro.status}
                </p>
              </div>
              {livro.renovavel ? (
                <button className="btn">Renovar</button>
              ) : (
                <p className="msg">Renovação indisponível</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="lista">
          <input
            type="text"
            placeholder="Buscar por título ou autor..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="input"
          />
          {livrosFiltrados.map((livro) => (
            <div key={livro.id} className="card">
              <div className="info">
                <p className="livro">{livro.titulo}</p>
                <p>Autor: {livro.autor}</p>
              </div>
              {livro.disponivel ? (
                <button className="btn">Emprestar</button>
              ) : (
                <p className="msg">Indisponível</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
