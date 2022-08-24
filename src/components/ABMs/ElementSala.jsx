import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import {
  deleteSala,
  setMaintenanceSala,
  updateSala,
} from "../../actions/sala.js";
import { GrVmMaintenance } from "react-icons/gr";
import { FaWrench } from "react-icons/fa";

const ElementSala = ({ data }) => {
  const dispatch = useDispatch();
  const [modalModify, setModalModify] = useState(false);
  const toggleModify = () => setModalModify(!modalModify);

  const [modalDelete, setModalDelete] = useState(false);
  const toggleDelete = () => setModalDelete(!modalDelete);
  const [modalMaintenance, setModalMaintenance] = useState(false);
  const toggleMaintenance = () => setModalMaintenance(!modalMaintenance);

  const { id, name, state, number_column, number_row } = data;

  const handleDelete = () => {
    dispatch(deleteSala(id));
  };
  const handleMaintenance = () => {
    dispatch(
      setMaintenanceSala({
        id: id,
        name: name,
        number_column: number_column,
        number_row: number_row,
        state: 0,
      })
    );
    setModalMaintenance(false);
  };

  const [newData, setNewData] = useState({
    id: id,
    name: name,
    number_column: number_column,
    number_row: number_row,
    state: state,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setNewData({
      ...newData,
      [e.target.name]: value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (String(name).trim() === "") {
      //falta validar formato
      return alert("Complete los campos"); //ver para cambiar
    } else {
      dispatch(updateSala(newData));
      toggleModify();
    }
  };
  return (
    <>
      <td>{id}</td>
      <td>{name}</td>
      <td>{number_row}</td>
      <td>{number_column}</td>
      <td>
        {state === true || state === "true" ? "Disponible" : "No Disponible"}
      </td>
      <td>
        <button
          className="btn btn-danger "
          onClick={toggleDelete}
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
      <td>
        {" "}
        <button
          className="btn btn-warning"
          onClick={toggleModify}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pencil-fill"
            viewBox="0 0 16 16"
          >
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
          </svg>
        </button>
      </td>
      <td>
        {" "}
        <button
          className="btn btn-info"
          onClick={toggleMaintenance}
          type="button"
        >
          <FaWrench />
        </button>
      </td>

      <Modal isOpen={modalModify} toggle={toggleModify} className="modalcss">
        <ModalHeader className="text-dark" toggle={toggleModify}>
          Sala - Modificar Datos
        </ModalHeader>
        <ModalBody className="text-dark">
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <p>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  placeholder="Id"
                  value={id}
                  disabled
                />
              </p>
            </div>
            <div className="mb-3">
              <p>
                <input
                  onChange={handleChange}
                  value={newData.name}
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Nombre de la Sala"
                  maxLength="75"
                />
              </p>
            </div>
            <div className="mb-3">
              <div className="d-flex">
                <input
                  onChange={handleChange}
                  value={newData.number_row}
                  type="number"
                  className="form-control me-1"
                  name="number_row"
                  placeholder="Nro de la Filas"
                  disabled
                />
                <input
                  onChange={handleChange}
                  value={newData.number_column}
                  type="number"
                  className="form-control ms-1"
                  name="number_column"
                  placeholder="Nro de Butacas por Fila"
                  disabled
                />
              </div>
            </div>

            <div className="mb-3">
              <select
                onChange={handleChange}
                value={newData.state}
                name="state"
                className="form-select"
                aria-label="Estado"
                disabled
              >
                <option value={true}>Disponible</option>
                <option value={false}>No Disponible</option>
              </select>
            </div>

            <div className="modal-footer d-flex text-center">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={toggleModify}
              >
                Cerrar
              </button>
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>

      <Modal isOpen={modalDelete} toggle={toggleDelete} className="modalcss">
        <ModalHeader className="text-dark" toggle={toggleDelete}>
          Estas seguro que quieres eliminar esta sala?
        </ModalHeader>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={toggleDelete}
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

      <Modal
        isOpen={modalMaintenance}
        toggle={toggleMaintenance}
        className="modalcss"
      >
        <ModalHeader className="text-dark" toggle={toggleMaintenance}>
          Estas seguro que poner esta sala en mantenimiento?
        </ModalHeader>
        <ModalBody className="text-dark">
          <p>
            Si pones la sala en mantenimiento se cancelaran todas las funciones.
          </p>
          <p>
            Se notificará a todos los usuarios que hayan comprado un ticket para
            las funciones correspondientes
          </p>
        </ModalBody>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={toggleMaintenance}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleMaintenance}
          >
            Aceptar
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ElementSala;
