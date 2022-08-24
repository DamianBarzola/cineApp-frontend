import React, { useEffect, useState } from "react";

import styles from "../styles/ABMs.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";
import {
  loadFilmsAll,
  loadSalesPerMovie,
  readFilms,
  readSales,
} from "../actions/film";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const SalesPerMovie = ({ handleLogOut }) => {
  const sales = useSelector((state) => state.film.list);
  const { auth } = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    loadSalesPerMovie().then((filmData) => {
      dispatch(readSales(filmData));
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

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
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="bg-dark pt-1">
            <div>
              <div className="d-flex row align-items-center">
                <div className="col-md-2">
                  <Link to="/films" className="btn btn-secondary">
                    Volver
                  </Link>
                </div>
                <div className="col-md-8">
                  <h1>Ventas por Película</h1>
                </div>
              </div>
              <div className="d-flex  mt-3 row m-md-4 table-responsive">
                <table className="table text-light border-dark">
                  <thead>
                    <tr>
                      <th>Película</th>
                      <th>Entradas Vendidas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sales.map((sale, index) => (
                      <tr key={index}>
                        <td>{sale[0]}</td>
                        <td>{sale[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPerMovie;
