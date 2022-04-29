import React, { useEffect, useState } from "react";

import styles from "../styles/ABMs.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";
import Spinner from "../components/Spinner";
import { loadShows, readShows } from "../actions/show";
import { transformDateFormat } from "../utils/validations";
import { Link } from "react-router-dom";

const SalesPerShow = () => {
  const { auth } = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(true);
  const shows = useSelector((state) => state.show.data);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    loadShows().then((showData) => {
      dispatch(readShows(showData));
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const handleLogOut = () => {
    dispatch(logout());
    window.location.reload(); //ver para cambiar
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center text-center p-md-4 ">
        <div
          className={styles.containerCard + " container col-md-12 p-4 bg-dark"}
        >
          <div className="d-flex justify-content-around row">
            <div className="col-5 text-start d-flex text-align-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <h3 className={styles.font}> {auth.fullname}</h3>
            </div>
            <div className="col-5 text-end">
              <button
                className={styles.close + " btn btn-danger"}
                onClick={handleLogOut}
              >
                Cerrar Sesion
              </button>
            </div>
          </div>
          <hr />
          <div className="bg-dark pt-1">
            <div>
              <div className="d-flex row align-items-center">
                <div className="col-md-2">
                  <Link to="/abm" className="btn btn-secondary">
                    Volver
                  </Link>
                </div>
                <div className="col-md-8">
                  <h1>Ventas por Función</h1>
                </div>
              </div>
              <div className="d-flex justify-content-around align-items-center mt-4">
                <h3 className="mb-0 ps-md-4">Función: </h3>
                <select className="form-control" style={{ width: "75%" }}>
                  {shows &&
                    shows.map((film, index) => {
                      return (
                        <option value={index}>
                          {film.pelicula.name} - {film.sala.name} -{" "}
                          {film.fechaFuncion &&
                            transformDateFormat(film.fechaFuncion)}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="d-flex  mt-4  row">
                <div className="col-md-6">
                  <h4>Nº de Entradas Vendidas: 0</h4>
                </div>
                <div className="col-md-6">
                  <h4>Ganancias Totales: 0</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPerShow;
