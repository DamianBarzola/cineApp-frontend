import React, { useEffect, useState } from "react";

import styles from "../styles/ABMs.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";
import Spinner from "../components/Spinner";
import {
  loadSalesPerShow,
  loadShows,
  readSalesPerShow,
  readShows,
} from "../actions/show";
import { transformDateFormat } from "../utils/validations";
import { Link } from "react-router-dom";

const SalesPerShow = () => {
  const { auth } = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(true);
  const sales = useSelector((state) => state.show.list);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    loadSalesPerShow().then((showData) => {
      dispatch(readSalesPerShow(showData));
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
              <div className="d-flex  mt-3 row m-md-5 table-responsive">
                <table className="table text-light border-dark">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Película</th>
                      <th>Sala</th>
                      <th>Fecha</th>
                      <th>Horario</th>
                      <th>Entradas Vendidas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sales.map((sale, index) => (
                      <tr key={index}>
                        <td>{sale[0]}</td>
                        <td>{sale[1]}</td>
                        <td>{sale[2]}</td>
                        <td>{sale[3] && transformDateFormat(sale[3])}</td>
                        <td>{sale[4]}</td>

                        <td>{sale[5]}</td>
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

export default SalesPerShow;
