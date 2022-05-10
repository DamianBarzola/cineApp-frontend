import React, { useEffect, useState } from "react";
import styles from "../styles/Tickets.module.css";
import { loadFilmsAvailable } from "../actions/film";
import { loadDates, loadFunciones, loadButacas } from "../actions/funcion";
import style from "../styles/Contact.module.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {
  formatCVC,
  formatExpirationDate,
  formatNumberCard,
} from "../utils/cardUtils";
import { useDispatch, useSelector } from "react-redux";
import { buyTicket, clearTicketData } from "../actions/reservas";
import { FaExclamationCircle } from "react-icons/fa";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";

const Tickets = () => {
  const ticketSale = useSelector((state) => state.ticketSale);
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({
    poster:
      "https://preview.redd.it/z9xed4f4guw71.jpg?auto=webp&s=7e7cd9550853af5caa7a3f805b1f8edc11f59fe1",
    name: "Peli",
  });
  const [page, setPage] = useState(1);

  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");

  const [fechasFunciones, setFechasFunciones] = useState([]);
  const [fechaFuncion, setFechaFuncion] = useState("");

  const [funciones, setFunciones] = useState([]);
  const [funcion, setFuncion] = useState("");

  const [butacas, setButacas] = useState([]);
  const [butaca, setButaca] = useState("");
  const [email, setEmail] = useState("");
  const [number, setnumber] = useState("");
  const [name, setname] = useState("");
  const [expiry, setexpiry] = useState("");
  const [cvc, setcvc] = useState("");
  const [focus, setfocus] = useState("");
  //Pelicula, dia -> Funciones -> y butaca

  const [error, setError] = useState({ select: "", payment: "" });

  useEffect(() => {
    dispatch(clearTicketData());
    setError({ select: "", payment: "" });
    loadFilmsAvailable().then((data) => {
      setMovies(data);
    });
  }, [dispatch]);

  const handleMovie = (e) => {
    const id = e.target.value;
    setMovieId(id);
    const movie = movies.find((element) => element.id == id);
    if (movie) {
      setMovie({
        poster: movie.poster,
      });
    } else {
      setMovie({
        poster:
          "https://preview.redd.it/z9xed4f4guw71.jpg?auto=webp&s=7e7cd9550853af5caa7a3f805b1f8edc11f59fe1",
      });
    }
    setFechaFuncion("");
    setFuncion("");
    setButaca("");
  };

  useEffect(() => {
    loadDates(movieId).then((data) => {
      setFechasFunciones(data);
    });
  }, [movieId]);

  const handleDate = (event) => {
    setFechaFuncion(event.target.value);
    setFuncion("");
    setButaca("");
  };

  useEffect(() => {
    loadFunciones(movieId, fechaFuncion).then((resFuncion) => {
      setFunciones(resFuncion);
    });
  }, [movieId, fechaFuncion]);

  const handleFuncion = (event) => {
    setFuncion(event.target.value);
    setButaca("");
  };

  useEffect(() => {
    loadButacas(funcion).then((resButacas) => {
      setButacas(resButacas);
    });
  }, [funcion]);

  const handleButaca = (event) => {
    setButaca(event.target.value);
  };
  const handleSelect = (e) => {
    dispatch(clearTicketData());
    e.preventDefault();
    if (
      movieId.trim() === "" ||
      fechaFuncion.trim() === "" ||
      funcion.trim() === "" ||
      butaca.trim() === ""
    ) {
      setError({ select: "Complete todos los campos.", payment: "" });
    } else {
      setError({ select: "", payment: "" });
      setPage(2);
    }
  };
  const handleBuy = (e) => {
    dispatch(clearTicketData());
    e.preventDefault();
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      expiry.trim() === "" ||
      number.trim() === "" ||
      cvc.trim() === ""
    ) {
      setError({ select: "", payment: "Complete todos los campos." });
    } else {
      setError({ select: "", payment: "" });
      const data = {
        butaca_id: butaca,
        funcion_id: funcion,
        email: email,
        name: name,
        expiry: expiry,
        cvc: cvc,
        number: number,
      };
      dispatch(buyTicket(data));
    }
  };
  if (ticketSale.situation === 1) {
    return <Redirect to="/salesuccess" />;
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center text-center p-md-4 p-1">
        <div
          className={styles.containerCard + " container col-md-12 p-5 bg-dark"}
        >
          <div className="row">
            <div className="col-md-6 	d-none d-md-block">
              <img
                className={`${styles.col} ${styles.movieImage}` + " rounded"}
                src={movie.poster}
                alt={movie.name}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src =
                    "https://www.2queue.com/2queue/wp-content/uploads/sites/6/tdomf/4299/movie-poster-coming-soon.png";
                }}
                style={{
                  width: "300px",
                  height: "470px",
                  objectFit: "cover",
                  marginTop: "10px",
                }}
              />
            </div>
            {page === 1 && (
              <div className="col-md-6">
                <div className="mb-3">
                  <h1 className="mb-2">Boleteria Virtual</h1>
                  <span>
                    Bienvenido, en esta sección podras comprar las entradas para
                    la películas que estan actualmente en cartelera.
                  </span>
                </div>
                <div className="pe-1 ps-1">
                  <select
                    className="form-select m-2 mb-3 mt-4"
                    style={{ padding: "10px" }}
                    aria-label="Default select example"
                    defaultValue=""
                    onChange={handleMovie}
                  >
                    <option value="">Seleccione una Película</option>
                    {movies.map((movie) => (
                      <option value={movie.id} key={movie.id}>
                        {movie.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="pe-1 ps-1">
                  <select
                    className="form-select m-2 mb-3 mt-4"
                    style={{ padding: "10px" }}
                    aria-label="Default select example"
                    defaultValue=""
                    onChange={handleDate}
                  >
                    <option value="">Seleccione una Fecha</option>
                    {fechasFunciones.map((fecha) => (
                      <option value={fecha} key={fecha}>
                        {fecha}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="pe-1 ps-1">
                  <select
                    className="form-select m-2 mb-3 mt-4"
                    style={{ padding: "10px" }}
                    aria-label="Default select example"
                    defaultValue=""
                    onChange={handleFuncion}
                  >
                    <option value="">Seleccione una Función</option>
                    {funciones.map((funcion) => (
                      <option value={funcion.id} key={funcion.id}>
                        {funcion.horaFuncion}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="pe-1 ps-1">
                  <select
                    className="form-select m-2 mb-3 mt-4"
                    style={{ padding: "10px" }}
                    aria-label="Default select example"
                    defaultValue=""
                    onChange={handleButaca}
                  >
                    <option value="">Seleccione una Butaca</option>
                    {butacas.map((butaca) => (
                      <option value={butaca.id} key={butaca.id}>
                        Fila: {butaca.position_x} - Columna: {butaca.position_y}
                      </option>
                    ))}
                  </select>
                </div>
                {error.select && (
                  <div>
                    <span
                      className="text-danger fw-bold d-flex justify-content-center align-items-center mt-1 mb1"
                      style={{ fontSize: "18px" }}
                    >
                      <FaExclamationCircle fontSize={"22px"} className="me-2" />
                      {error.select}
                    </span>
                  </div>
                )}
                <button className={style.btn} onClick={handleSelect}>
                  Confirmar Comprar
                </button>
                <hr className="m-1 mb-2" />
                <span>
                  Quieres cancelar una compra?{" "}
                  <Link to="/cancelsale">Ingrese Aquí</Link>
                </span>
              </div>
            )}
            {page === 2 && (
              <div className="col-md-6  ">
                <div className="mb-2">
                  <h1 className="mb-1">Información de Pago</h1>
                </div>{" "}
                <div className="p-2">
                  <Cards
                    locale={{ valid: "Vencimiento" }}
                    placeholders={{ name: "Nombre Completo" }}
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={focus}
                    style={{ with: "100px" }}
                  />
                </div>
                <div className="pe-1 ps-1">
                  <input
                    className="form-control p-2 ms-2 m-1"
                    type="text"
                    value={name}
                    name="name"
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    onFocus={(e) => setfocus(e.target.name)}
                    placeholder="Nombre Completo"
                    maxLength={40}
                    style={{ width: "98%" }}
                  ></input>
                </div>
                <div className="d-flex ps-1">
                  <input
                    className="form-control m-2 p-2 "
                    type="tel"
                    name="number"
                    pattern="[\d| ]{16,22}"
                    value={number}
                    onChange={(e) =>
                      setnumber(formatNumberCard(e.target.value))
                    }
                    maxLength={22}
                    onFocus={(e) => setfocus(e.target.name)}
                    placeholder="Número de la Tarjeta"
                  ></input>

                  <input
                    className="form-control m-2 p-2 "
                    type="tel"
                    name="cvc"
                    value={cvc}
                    onChange={(e) => setcvc(formatCVC(e.target.value))}
                    onFocus={(e) => setfocus(e.target.name)}
                    placeholder="CVV"
                    maxLength={4}
                    pattern="\d{3,4}"
                    style={{ width: "20%" }}
                  ></input>
                  <input
                    className="form-control m-2 p-2 "
                    type="text"
                    name="expiry"
                    value={expiry}
                    pattern="\d\d/\d\d"
                    onChange={(e) =>
                      setexpiry(formatExpirationDate(e.target.value))
                    }
                    onFocus={(e) => setfocus(e.target.name)}
                    placeholder="Vencimiento"
                    style={{ width: "30%" }}
                  ></input>
                </div>
                <hr />
                <div className="pe-1 ps-1 mb-3">
                  <input
                    className="form-control p-2 ms-2 m-1"
                    type="text"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Correo Electrónico para Contacto"
                    style={{ width: "98%" }}
                  ></input>
                </div>
                {error.payment && (
                  <div>
                    <span
                      className="text-danger fw-bold d-flex justify-content-center align-items-center mt-1 mb1"
                      style={{ fontSize: "18px" }}
                    >
                      <FaExclamationCircle fontSize={"22px"} className="me-2" />
                      {error.payment}
                    </span>
                  </div>
                )}
                {ticketSale.situation === 2 && (
                  <div>
                    <span
                      className="text-danger fw-bold d-flex justify-content-center align-items-center mt-1 mb1"
                      style={{ fontSize: "18px" }}
                    >
                      <FaExclamationCircle fontSize={"22px"} className="me-2" />
                      {ticketSale.message}
                    </span>
                  </div>
                )}
                <div className="d-flex justify-content-around">
                  <button
                    className={style.btnBack}
                    onClick={() => {
                      setError({ select: "", payment: "" });
                      setPage(1);
                    }}
                  >
                    Cancelar
                  </button>

                  <button className={style.btn} onClick={handleBuy}>
                    Finalizar Comprar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
