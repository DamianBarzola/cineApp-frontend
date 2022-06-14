import React, { useEffect, useState } from "react";
import styles from "../styles/Tickets.module.css";
import "react-credit-cards/es/styles-compiled.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "../styles/Contact.module.css";
import { FaExclamationCircle } from "react-icons/fa";
import { clearTicketData, deleteTicketSale } from "../actions/ticketSale";
import { Redirect } from "react-router-dom";

const CancelSale = () => {
  const dispatch = useDispatch();
  const cancelSale = useSelector((state) => state.ticketSale);

  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    code: "",
  });

  const { email, code } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    dispatch(clearTicketData());
  }, []);

  const handleCancelTicket = (e) => {
    dispatch(clearTicketData());
    setError("");
    e.preventDefault();
    if (email.trim() === "" || code.trim() === "") {
      setError("Complete todos los campos");
    } else {
      setError("");
      dispatch(deleteTicketSale(data));
    }
  };

  if (cancelSale.messageCancel) {
    if (cancelSale.messageCancel.situation === 1) {
      return <Redirect to="/cancelsuccess" />;
    }
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
                <h1 className="mb-2">Devolución de entradas</h1>
                <hr />
              </div>
              <div>
                <span>
                  Por favor ingrese el correo electrónico utilizado para
                  realizar la compra y el código recibido en el correo con la
                  información de la compra.
                </span>
                <div className="pe-md-5 ps-md-5 p-2">
                  <div className="pe-md-5 ps-md-5 ">
                    <div className="pe-md-4 ps-md-4 p-3">
                      <div className="p-2">
                        <input
                          onChange={handleChange}
                          value={code}
                          type="text"
                          className="form-control"
                          name="code"
                          maxLength="250"
                          placeholder="Código de compra"
                        />
                      </div>
                      <div className="p-2">
                        <input
                          onChange={handleChange}
                          value={email}
                          type="text"
                          className="form-control"
                          name="email"
                          maxLength="250"
                          placeholder="Correo Electrónico"
                        />
                      </div>
                    </div>
                  </div>
                  {error && (
                    <div>
                      <span
                        className="text-danger fw-bold d-flex justify-content-center align-items-center mt-1 mb1"
                        style={{ fontSize: "16px" }}
                      >
                        <FaExclamationCircle
                          fontSize={"20px"}
                          className="me-2"
                        />
                        {error}
                      </span>
                    </div>
                  )}
                  {cancelSale.messageCancel &&
                    (cancelSale.messageCancel.situation === 2 ||
                      cancelSale.messageCancel.situation === 3) && (
                      <div>
                        <span
                          className="text-danger fw-bold d-flex justify-content-center align-items-center mt-1 mb1"
                          style={{ fontSize: "16px" }}
                        >
                          <FaExclamationCircle
                            fontSize={"20px"}
                            className="me-2"
                          />
                          {cancelSale.messageCancel.message}
                        </span>
                      </div>
                    )}
                </div>
                <div className=" mb-3 d-flex justify-content-around align-items-center">
                  <div>
                    <Link to="/tickets" className={style.btnBack}>
                      Volver
                    </Link>
                  </div>
                  <div>
                    {" "}
                    <button onClick={handleCancelTicket} className={style.btn}>
                      Devolver entrada
                    </button>
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

export default CancelSale;
