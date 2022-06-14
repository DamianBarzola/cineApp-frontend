import React, { useEffect } from "react";
import styles from "../styles/Tickets.module.css";
import "react-credit-cards/es/styles-compiled.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "../styles/Contact.module.css";
import { clearTicketData } from "../actions/ticketSale";
import { Redirect } from "react-router-dom";

const TicketCancelSuccess = () => {
  const dispatch = useDispatch();

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
                <h1 className="mb-2">Devolución de entradas</h1>
                <hr />
              </div>
              <div>
                <div className="p-4 mb-4">
                  <h4>Entrada cancelada correctamente.</h4>
                  <br />
                  <span>
                    Visite nuestra boleteria virtual para ver las peliculas en
                    cartelera actualmente o vuelva para cancelar otra entrada.
                  </span>
                </div>
                <div className=" mb-3 d-flex justify-content-around align-items-center">
                  <div>
                    <Link
                      to="/cancelsale"
                      className={style.btnBack}
                      onClick={() => {
                        dispatch(clearTicketData());
                      }}
                    >
                      Volver
                    </Link>
                  </div>
                  <div>
                    {" "}
                    <Link
                      to="/tickets"
                      className={style.btn}
                      onClick={() => {
                        dispatch(clearTicketData());
                      }}
                    >
                      Ir a Boleteria
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCancelSuccess;
