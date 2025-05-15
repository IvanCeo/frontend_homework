import { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // если будешь генерировать id тут

const MovieContext = createContext();

export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(() => {
    const stored = localStorage.getItem('movies');
    return stored
      ? JSON.parse(stored)
      : [
          {
            id: '1',
            title: 'Baby billion',
            genre: 'Genre baby billion',
            duration: '200 min',
            image: '/images/larry.webp',
            description: 'A mind-bending thriller by Christopher Nolan.',
          },
          {
            id: '2',
            title: 'Gladiator',
            genre: 'action',
            duration: '155 min',
            image: '/images/gladiator.webp',
            description: 'Gladiator is a 2000 epic historical drama film directed \
            by Ridley Scott and written by David Franzoni, John Logan, and William \
            Nicholson from a story by Franzoni. It stars Russell Crowe, Joaquin Pho\
            enix, Connie Nielsen, Oliver Reed, Derek Jacobi, Djimon Hounsou, and Ri\
            chard Harris. Crowe portrays Maximus Decimus Meridius, a Roman general \
            who is betrayed when Commodus, the ambitious son of Emperor Marcus Aure\
            lius, murders his father and seizes the throne. Reduced to slavery, Max\
            imus becomes a gladiator and rises through the ranks of the arena, dete\
            rmined to avenge the murders of his family and the emperor.',
          },
        ];
  });

  // Сохраняем в localStorage при любом изменении
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => {
    setMovies((prev) => [...prev, movie]);
  };

  const [favorites, setFavorites] = useState([]);

const addToFavorites = (movieId) => {
  if (!favorites.includes(movieId)) {
    setFavorites((prev) => [...prev, movieId]);
  }
};

const removeMovie = (movieId) => {
  setMovies((prev) => prev.filter((m) => m.id !== movieId));
  setFavorites((prev) => prev.filter((id) => id !== movieId)); // если был в избранных
};


  return (
    <MovieContext.Provider value={{ movies, addMovie, favorites, addToFavorites, removeMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
