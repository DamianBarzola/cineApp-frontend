import styles from "../styles/MovieCard.module.css";
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          width="auto"
          height={300}
          src={movie.poster}
          alt={movie.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              "https://www.2queue.com/2queue/wp-content/uploads/sites/6/tdomf/4299/movie-poster-coming-soon.png";
          }}
          className="rounded"
        />
        <div className={styles.title}>{movie.name}</div>
      </Link>
    </li>
  );
};

export default MovieCard;
