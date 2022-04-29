import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import styles from "../styles/MoviesGrid.module.css";
// import { get } from "../utils/httpClient";
import { loadFilms } from "../actions/film";
import Spinner from "./Spinner";
import ConectionLost from "./MsgPages/ConectionLost";

const MoviesGrid = () => {
  const [movies, setmovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    loadFilms("Cartelera")
      .then((data) => {
        setmovies(data);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(true);
      });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <ConectionLost />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesGrid;
