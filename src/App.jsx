import { useState, useEffect } from 'react';
import './App.css';
import { Tarjetas } from './componentes/Tarjetas';

function App() {
  const [buscar, setBuscar] = useState('');
  const [existe, setExiste] = useState(false);
  const [resultadoGet, setResultadoGet] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [verFavoritos, setVerFavoritos] = useState(false);

  async function handleBuscar(e) {
    e.preventDefault();
    if (!buscar) {
      alert('Debe ingresar algo');
      return;
    }

    buscarTMDb(buscar);
  }

  async function buscarTMDb(buscar) {
    try {
      const apiKey = 'eff7a5971a7dd31fab76a4f3fe322626';
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(buscar)}`;
      
      const res = await fetch(url);
      const data = await res.json();
      
      if (data.results && data.results.length > 0) {
        // Normaliza los datos para que coincidan con el formato de favoritos
        const normalizados = data.results.map(pelicula => ({
          movieId: pelicula.id.toString(),
          title: pelicula.title,
          posterPath: pelicula.poster_path,
          releaseYear: pelicula.release_date ? pelicula.release_date.split('-')[0] : 'Año no disponible'
        }));
        
        setExiste(true);
        setResultadoGet(normalizados);
      } else {
        setExiste(false);
        setResultadoGet(null);
      }
    } catch (error) {
      console.error('Error en la solicitud GET:', error);
      setExiste(false);
      setResultadoGet(null);
    }
  }  
  async function obtenerFavoritos() {
    try {
      const url = 'http://localhost:3001/api/favoritos';
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Error en la solicitud: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      if (data.length === 0) {
        alert("No hay películas favoritas guardadas.");
      } else {
        setFavoritos(data);
        setVerFavoritos(true);
      }
    } catch (error) {
      console.error('Error al obtener los favoritos:', error);
      alert(`Error al obtener los favoritos: ${error.message}`);
    }
  }

  const regresarABusqueda = () => {
    setVerFavoritos(false);
    setBuscar('');
    setResultadoGet(null);
    setExiste(false);
  };

  return (
    <div className="App">
      <h3>TMDb Lo Mejor en Peliculas</h3>
      {!verFavoritos ? (
        <>
          <form onSubmit={handleBuscar}>
            <input
              type="text"
              placeholder="Ingrese el título de una película"
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
            />
            <button>Buscar</button>
          </form>
          <button onClick={obtenerFavoritos}>Ver Favoritos</button>
        </>
      ) : (
        <>
          <button onClick={regresarABusqueda}>Regresar a Búsqueda</button>
          {favoritos.length > 0 ? (
            <Tarjetas segundaBusqueda={favoritos} mostrarBotonFavorita={false} />
          ) : (
            <p>No hay películas favoritas guardadas.</p>
          )}
        </>
      )}
      {!verFavoritos && existe && (
        <Tarjetas segundaBusqueda={resultadoGet} mostrarBotonFavorita={true} />
      )}
    </div>
  );
}

export default App;
