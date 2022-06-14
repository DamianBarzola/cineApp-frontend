import React, { useEffect, useState } from "react";

import styles from "../styles/ABMs.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";
import Spinner from "../components/Spinner";
import { transformDateFormat } from "../utils/validations";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { deleteReserva, loadReservas, readreservas } from "../actions/reservas";

const TicketInfoPerShow = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const reservas = useSelector((state) => state.reserva.data);

  const [iddelete, setIddelete] = useState(0);
  const [modalDelete, setModalDelete] = useState(false);
  const toggleDeleteRes = () => setModalDelete(!modalDelete);
  const handleDelete = () => {
    deleteReserva(iddelete)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    loadReservas(id).then((data) => {
      setIsLoading(false);
      console.log(reservas);
      dispatch(readreservas(data));
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
                  <h1>Reservas para la función: {id}</h1>
                </div>
              </div>
              <div className="d-flex  mt-3 row m-md-5 table-responsive">
                {reservas === undefined || reservas.length == 0 ? (
                  <h3>No se registraron reservas</h3>
                ) : (
                  <table className="table text-light border-dark">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Fecha de compra</th>
                        <th>Email</th>
                        <th>Posición</th>
                        <th>Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reservas.map((reserva, index) => (
                        <tr key={index}>
                          <td>{reserva.id}</td>
                          <td>
                            {reserva.fechaCompra &&
                              transformDateFormat(reserva.fechaCompra)}
                          </td>
                          <td>{reserva.email}</td>
                          <td>
                            {"Fila: " +
                              reserva.butaca.position_x +
                              " Columna: " +
                              reserva.butaca.position_y}
                          </td>
                          <td>
                            <button
                              className="btn btn-danger me-1"
                              onClick={() => {
                                setIddelete(reserva.id);
                                toggleDeleteRes();
                              }}
                              type="button"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-trash-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
              <Modal
                isOpen={modalDelete}
                toggle={toggleDeleteRes}
                className="modalcss"
              >
                <ModalHeader className="text-dark" toggle={toggleDeleteRes}>
                  Estas seguro que quieres eliminar esta reserva?
                </ModalHeader>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={toggleDeleteRes}
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleDelete}
                  >
                    Aceptar
                  </button>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketInfoPerShow;
