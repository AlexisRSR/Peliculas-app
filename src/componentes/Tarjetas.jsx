import React from 'react';
import './tarjetas.css';

export const Tarjetas = ({ segundaBusqueda, mostrarBotonFavorita }) => {
  console.log('Datos en Tarjetas:', segundaBusqueda);

  if (!segundaBusqueda || segundaBusqueda.length === 0) {
    return <p>No se encontraron resultados.</p>;
  }

  const getTmdbLink = (id) => {
    return `https://www.themoviedb.org/movie/${id}`;
  };

  const getTmdbImageUrl = (path) => {
    return `https://image.tmdb.org/t/p/w500${path}`;
  };

  const marcarPeliculaComoFavorita = async (pelicula) => {
    try {
      const url = 'http://localhost:3001/api/favoritos';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          movieId: pelicula.movieId, // Asegúrate de que este campo esté definido
          title: pelicula.title,
          releaseYear: pelicula.releaseYear,
          posterPath: pelicula.posterPath,
        }),
      };
      const res = await fetch(url, options);
      if (res.ok) {
        alert('¡Película marcada como favorita con éxito!');
      } else {
        alert('Error al marcar la película como favorita:', res.status);
      }
    } catch (error) {
      alert('Error al marcar la película como favorita:', error);
    }
  };

  return (
    <div className='container'>
      {segundaBusqueda.map((pelicula, i) => (
        <div key={i}>
          <div className="pelicula">
            <h2>{pelicula.title}</h2>
            {pelicula.releaseYear ? (
              <h4>Año: {pelicula.releaseYear}</h4>
            ) : (
              <h4>Año no disponible</h4>
            )}
            {pelicula.posterPath ? (
              <img src={getTmdbImageUrl(pelicula.posterPath)} alt={pelicula.title} />
            ) : (
              <p>Imagen no disponible</p>
            )}
            <p>
              <a
                href={getTmdbLink(pelicula.movieId)} // Asegúrate de que esto esté definido
                className="title"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver detalles
              </a>
            </p>
            {mostrarBotonFavorita && (
              <button onClick={() => marcarPeliculaComoFavorita(pelicula)}>
                Favorita
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
