import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import styles from "../styles/MoviesGrid.module.css";
// import { get } from "../utils/httpClient";
import {loadFilms} from "../actions/film";
import Spinner from "./Spinner";
import { useQuery } from "../hooks/useQuery";

const MoviesGrid = () => {
  const [movies, setmovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    loadFilms('Cartelera').then((data) => {
      setmovies(data);
      setIsLoading(false);
    });
  }, [search]);

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
