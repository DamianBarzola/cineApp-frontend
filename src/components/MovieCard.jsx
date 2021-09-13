import styles from "../styles/MovieCard.module.css";
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const imageurl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          width="auto"
          height={300}
          className={styles.movieImage}
          src={imageurl}
          alt={movie.title}
        />
        <div className={styles.title}>{movie.title}</div>
      </Link>
    </li>
  );
};

export default MovieCard;
