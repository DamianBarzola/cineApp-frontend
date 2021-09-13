import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import styles from "../styles/MoviesGrid.module.css";
import { get } from "../utils/httpClient";
import Spinner from "./Spinner";
import { useQuery } from "../hooks/useQuery";

const MoviesGrid = () => {
  const [movies, setmovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&language=es-mx"
      : "/movie/now_playing?language=es-mx";
    get(searchUrl).then((data) => {
      setmovies(data.results);
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
