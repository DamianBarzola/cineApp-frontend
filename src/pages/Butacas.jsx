import React, { useState } from "react";
import styles from "../styles/ABMs.module.css";
import TableButaca from "../components/ABMs/TableButaca";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";

import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Butacas = () => {
  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    // dispatch(clearFilmData());
    // dispatch(clearShowData());
    // dispatch(clearSalaData());
    // dispatch(clearButacaData());
    window.location.reload(); //ver para cambiar
    // JSON.parse(localStorage.removeItem("user"));
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
            {" "}
            <div className="tabs ">
              <ul className={styles.tabsList}>
                <li className="tabs_tab-list-item" role="presentation">
                  <Link
                    to="/films"
                    className={styles.tabsTrigger}
                    style={{ width: "125px" }}
                  >
                    Peliculas
                  </Link>
                </li>
                <li className="tabs_tab-list-item" role="presentation">
                  <Link
                    to="/shows"
                    className={styles.tabsTrigger}
                    style={{ width: "125px" }}
                  >
                    Funciones
                  </Link>
                </li>
                <li className="tabs_tab-list-item" role="presentation">
                  <Link
                    to="/salas"
                    className={styles.tabsTrigger}
                    style={{ width: "125px" }}
                  >
                    Salas
                  </Link>
                </li>
                <li className="tabs_tab-list-item" role="presentation">
                  <Link
                    to="/butacas"
                    className={styles.tabsTriggerSelected}
                    style={{ width: "125px" }}
                  >
                    Butacas
                  </Link>
                </li>
              </ul>
              <div className="tabs_panels">
                <section className={styles.tabsPanel}>
                  <div className="">
                    <TableButaca />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Butacas;
