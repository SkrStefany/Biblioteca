import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";




const books = Array(12).fill({ title: "Livro", cover: "https://via.placeholder.com/100" });

export default function Catalogo() {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
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
      <Swiper slidesPerView={4} spaceBetween={10} pagination={{ clickable: true }}>
        {filteredBooks.map((book, index) => (
          <SwiperSlide key={index}>
            <div className="book-card">
              <img src={book.cover} alt={book.title} className="book-image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
