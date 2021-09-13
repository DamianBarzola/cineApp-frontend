import React, { useEffect, useState } from "react";
import styles from "../styles/MovieDetails.module.css";
import { useParams } from "react-router";
import { get } from "../utils/httpClient";
import Spinner from "../components/Spinner";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId + "?language=es-mx").then((data) => {
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

  const imageurl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailscontainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageurl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstitem}>
          <b>Título: </b>
          {movie.title}
        </p>
        <p>
          <b>Fecha de Estreno:</b> {movie.release_date}
        </p>
        <p>
          <b>Género: </b>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <b>Duración: </b>
          {movie.runtime} Min.
        </p>
        <p>
          <b> Descripción: </b>
          {movie.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
