import React, { useEffect, useState } from "react";
import styles from "../styles/Tickets.module.css";
import { loadFilms } from "../actions/film";
import { loadDates, loadFunciones, loadButacas } from "../actions/funcion";
import style from "../styles/Contact.module.css";

const Tickets = () => {
  const [movie, setMovie] = useState({
    poster:
      "https://preview.redd.it/z9xed4f4guw71.jpg?auto=webp&s=7e7cd9550853af5caa7a3f805b1f8edc11f59fe1",
    name: "Peli",
  });
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");

  const [fechasFunciones, setFechasFunciones] = useState([]);
  const [fechaFuncion, setFechaFuncion] = useState("");

  const [funciones, setFunciones] = useState([]);
  const [funcion, setFuncion] = useState("");

  const [butacas, setButacas] = useState([]);
  const [butaca, setButaca] = useState("");
  //Pelicula, dia -> Funciones -> y butaca

  useEffect(() => {
    loadFilms("Cartelera").then((data) => {
      setMovies(data);
    });
  }, []);

  const handleMovie = (e) => {
    const id = e.target.value;
    setMovieId(id);
    const movie = movies.find((element) => element.id == id);
    setMovie({
      poster: movie.poster,
    });
  };

  useEffect(() => {
    loadDates(movieId).then((data) => {
      setFechasFunciones(data);
    });
  }, [movieId]);

  const handleDate = (event) => {
    setFechaFuncion(event.target.value);
  };

  useEffect(() => {
    loadFunciones(movieId, fechaFuncion).then((resFuncion) => {
      setFunciones(resFuncion);
    });
  }, [movieId, fechaFuncion]);

  const handleFuncion = (event) => {
    setFuncion(event.target.value);
  };

  useEffect(() => {
    loadButacas(funcion).then((resButacas) => {
      setButacas(resButacas);
    });
  }, [funcion]);
  console.log(butacas);

  const handleButaca = (event) => {
    setButaca(event.target.value);
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center text-center p-md-4 p-1">
        <div
          className={styles.containerCard + " container col-md-12 p-5 bg-dark"}
        >
          <div className="row">
            <div className="col-md-6 	d-none d-md-block">
              <img
                className={`${styles.col} ${styles.movieImage}`}
                src={movie.poster}
                alt={movie.name}
                style={{ width: "260px", height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6">
              <form action="">
                <h1 className="mb-4">Bienvenido a la Boleteria Online</h1>
                <div className="pe-1 ps-1">
                  <select
                    className="form-select m-2 mb-3 p-2"
                    aria-label="Default select example"
                    defaultValue=""
                    onChange={handleMovie}
                  >
                    <option value="" disabled>
                      Sleccione una Película
                    </option>
                    {movies.map((movie) => (
                      <option value={movie.id} key={movie.id}>
                        {movie.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pe-1 ps-1">
                  <select
                    className="form-select m-2 mb-3 p-2"
                    aria-label="Default select example"
                    defaultValue=""
                    onChange={handleDate}
                  >
                    <option value="" disabled>
                      Seleccione una Fecha
                    </option>
                    {fechasFunciones.map((fecha) => (
                      <option value={fecha} key={fecha}>
                        {fecha}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="pe-1 ps-1">
                  <select
                    className="form-select m-2 mb-3 p-2"
                    aria-label="Default select example"
                    defaultValue=""
                    onChange={handleFuncion}
                  >
                    <option value="" disabled>
                      Seleccione una Función
                    </option>
                    {funciones.map((funcion) => (
                      <option value={funcion.id} key={funcion.id}>
                        {funcion.horaFuncion}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="pe-1 ps-1">
                  <select
                    className="form-select m-2 mb-3 p-2"
                    aria-label="Default select example"
                    defaultValue=""
                    onChange={handleButaca}
                  >
                    <option value="" disabled>
                      Seleccione una Butaca
                    </option>
                    {butacas.map((butaca) => (
                      <option value={butaca.id} key={butaca.id}>
                        Fila: {butaca.position_x} - Columna: {butaca.position_y}
                      </option>
                    ))}
                  </select>
                </div>
                <button className={style.btn}>Comprar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
