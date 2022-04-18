import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import styles from "../styles/MoviesGrid.module.css";
// import { get } from "../utils/httpClient";
import {loadFilms} from "../actions/film";
import Spinner from "./Spinner";

const MoviesGrid = () => {
  const [movies, setmovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    loadFilms('Proximamente').then((data) => {
      setmovies(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
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
