import React, { useEffect, useState } from "react";
import styles from "../styles/Tickets.module.css";
import "react-credit-cards/es/styles-compiled.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "../styles/Contact.module.css";
import { transformDateFormat } from "../utils/validations";
import { Redirect } from "react-router-dom";
import { clearTicketData } from "../actions/ticketSale";

const SaleSuccess = () => {
  const data = useSelector((state) => state.ticketSale.data);
  const dispatch = useDispatch();
  console.log(data);
  if (!data) {
    return <Redirect to="/tickets" />;
  }
  return (
    <div className="container">
      <div className="row d-flex justify-content-center text-center p-md-4 p-1">
        <div
          className={
            styles.containerCard2 + " container col-md-12 p-4 bg-dark m-md-5"
          }
        >
          <div className="row">
            <div className="col-md-12">
              <div>
                <h1 className="mb-2">Compra Exitosa</h1>
                <span>
                  Gracias por comprar la entrada para la funcion en nuestra web.
                  <br /> Se ha enviado un mensaje a su correo con los datos
                  completos de la compra.
                </span>
              </div>
              <div className="pe-md-5 ps-md-5 mb-2 p-2">
                <div className="pe-md-5 ps-md-5 ">
                  <div className="pe-md-4 ps-md-4 p-3">
                    <h3>Resumen de la compra</h3>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center ps-lg-3 pe-lg-3 ">
                      <h5 className="ms-lg-3">
                        <b>Pelicula</b>
                      </h5>
                      <h6 className="me-lg-3">{data.funcion.pelicula.name}</h6>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center ps-lg-3 pe-lg-3 ">
                      <h5 className="ms-lg-3">
                        <b>Fecha de Función</b>
                      </h5>
                      <h6 className="me-lg-3">
                        {transformDateFormat(data.funcion.fechaFuncion)}
                        {"  -  "} {data.funcion.horaFuncion}
                      </h6>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center ps-lg-3 pe-lg-3 ">
                      <h5 className="ms-lg-3">
                        <b>Sala</b>
                      </h5>
                      <h6 className="me-lg-3">{data.funcion.sala.name}</h6>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center ps-lg-3 pe-lg-3 ">
                      <h5 className="ms-lg-3">
                        <b>Butaca</b>
                      </h5>
                      <h6 className="me-lg-3">
                        Fila {data.butaca.position_y} Columna{" "}
                        {data.butaca.position_x}
                      </h6>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="mt-3 mb-3">
                <Link
                  to="/tickets"
                  className={style.btn}
                  onClick={(e) => {
                    dispatch(clearTicketData());
                  }}
                >
                  Volver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleSuccess;
