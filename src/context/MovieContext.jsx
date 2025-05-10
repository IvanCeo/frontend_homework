import { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
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
      genre: 'Genre gladiator',
      duration: '202 min',
      image: '/images/larry.webp',
      description: 'A mind-bending thriller by Christopher Nolan.',
    },
    // добавляй другие фильмы тут
  ]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
