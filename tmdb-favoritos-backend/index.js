const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/tmdb_favoritos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Definición del esquema Favorito
const FavoritoSchema = new mongoose.Schema({
  movieId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  posterPath: String,
  releaseYear: String, // Campo para el año de lanzamiento
});

const Favorito = mongoose.model('Favorito', FavoritoSchema);

// Ruta para agregar una película a favoritos
app.post('/api/favoritos', async (req, res) => {
  try {
    const { movieId, title, posterPath, releaseYear } = req.body;
    const nuevoFavorito = new Favorito({ movieId, title, posterPath, releaseYear });
    await nuevoFavorito.save();
    res.status(201).send('Película marcada como favorita.');
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).send('La película ya está en favoritos.');
    } else {
      res.status(400).send('Error al marcar como favorita: ' + error.message);
    }
  }
});

// Ruta para obtener las películas favoritas
app.get('/api/favoritos', async (req, res) => {
  try {
    const favoritos = await Favorito.find();
    res.json(favoritos); // Asegúrate de que los documentos contienen movieId
  } catch (error) {
    res.status(500).send('Error al obtener los favoritos: ' + error.message);
  }
});

// Inicia el servidor en el puerto 3001
app.listen(3001, () => {
  console.log('Servidor escuchando en http://localhost:3001');
});
