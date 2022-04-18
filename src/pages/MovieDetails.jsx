import React, { useEffect, useState } from "react";
import styles from "../styles/MovieDetails.module.css";
import { useParams } from "react-router";
// import { get } from "../utils/httpClient";
import {loadOneFilm} from "../actions/film";
import Spinner from "../components/Spinner";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    loadOneFilm(movieId).then((data) => {
      setMovie(data);
      console.log(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!movie) {
    return null;
  }
  return (
    <div className={styles.detailscontainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={movie.poster}
        alt={movie.name}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstitem}>
          <b>Título: </b>
          {movie.name}
        </p>
        <p>
          <b>Duración: </b>
          {movie.duration} Min.
        </p>
        <p>
          <b> Descripción: </b>
          {movie.description}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
