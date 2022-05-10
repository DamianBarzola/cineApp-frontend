import React, { useEffect, useState } from "react";
import styles from "../styles/MovieDetails.module.css";
import stylesbutton from "../styles/Contact.module.css";
import { useParams } from "react-router";
// import { get } from "../utils/httpClient";
import { loadOneFilm } from "../actions/film";
import Spinner from "../components/Spinner";
import ConectionLost from "../components/MsgPages/ConectionLost";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    loadOneFilm(movieId)
      .then((data) => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <ConectionLost />;
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
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src =
            "https://www.2queue.com/2queue/wp-content/uploads/sites/6/tdomf/4299/movie-poster-coming-soon.png";
        }}
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
        <div>
          <p style={{ textAlign: "justify" }}>
            <b> Descripción: </b>
            {movie.description}
          </p>
        </div>

        <div className="text-center">
          <Link to={"/tickets/"}>
            <button className={stylesbutton.btn + " mt-2"}>
              Comprar Boletos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
