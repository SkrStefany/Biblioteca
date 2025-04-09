import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import '../index.css';

export default function Catalogo() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://projetointegrador3.onrender.com/api/Livros")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar livros:", err);
        setLoading(false);
      });
  }, []);

  const filteredBooks = books.filter((book) =>
    book.titulo?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">CATÁLOGO ONLINE</h1>

      <div className="search-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Buscar..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Carregando livros...</p>
      ) : (
        <Swiper slidesPerView={4} spaceBetween={10} pagination={{ clickable: true }}>
          {filteredBooks.map((book) => (
            <SwiperSlide key={book.id}>
              <div
                className="book-card"
                onClick={() => navigate(`/livro/${book.id}`)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={book.capa || "https://via.placeholder.com/100"}
                  alt={book.titulo}
                  className="book-image"
                />
                <p className="book-title">{book.titulo}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
