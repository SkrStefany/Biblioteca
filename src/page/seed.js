// seed.js
const mongoose = require('mongoose');
const Livro = require('./models/Livro'); 

mongoose.connect('sua_string_de_conexão_mongodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const livros = [
  {
    titulo: "Dom Casmurro",
    capa: "https://m.media-amazon.com/images/I/81jScy5XpzL._SY466_.jpg",
  },
  {
    titulo: "O Pequeno Príncipe",
    capa: "https://m.media-amazon.com/images/I/81eLQCd1-ML._SY466_.jpg",
  },
  {
    titulo: "1984",
    capa: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
  },
  {
    titulo: "O Hobbit",
    capa: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg",
  },
  {
    titulo: "A Revolução dos Bichos",
    capa: "https://m.media-amazon.com/images/I/81O2l45YxLL.jpg",
  },
  {
    titulo: "Harry Potter e a Pedra Filosofal",
    capa: "https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg",
  },
  {
    titulo: "Senhor dos Anéis",
    capa: "https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg",
  },
  {
    titulo: "Capitães da Areia",
    capa: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
  },
];

async function seedLivros() {
  try {
    await Livro.deleteMany(); // Limpa a coleção antes
    await Livro.insertMany(livros);
    console.log("Livros inseridos com sucesso!");
    process.exit();
  } catch (error) {
    console.error("Erro ao inserir livros:", error);
    process.exit(1);
  }
}

seedLivros();
