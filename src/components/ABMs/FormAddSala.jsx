import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { createSala } from "../../actions/sala";

const FormAddShow = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [sala, setSala] = useState({
    name: "",
    state: "true",
    number_column: "",
    number_row: "",
  });

  const { name, state, number_column, number_row } = sala;

  const handleChange = (e) => {
    const value = e.target.value;
    setSala({
      ...sala,
      [e.target.name]: value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      //falta validar formato
      return alert("Complete los campos"); //ver para cambiar
    } else {
      dispatch(createSala(sala));
      toggle();
      setSala({
        name: "",
        state: "true",
        number_column: "",
        number_row: "",
      });
    }
  };

  return (
    <div className="modalcss">
      <button type="button" className="btn btn-success  mb-2" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-plus-circle-fill"
          viewBox="0 0 20 18"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
        </svg>
        Agregar
      </button>

      <Modal isOpen={modal} toggle={toggle} className="modalcss">
        <ModalHeader className="text-dark" toggle={toggle}>
          Agregar Sala
        </ModalHeader>
        <ModalBody className="text-dark">
          <form>
            <div className="mb-3">
              <p>
                <input
                  onChange={handleChange}
                  value={name}
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
                  value={number_row}
                  type="number"
                  className="form-control me-1"
                  name="number_row"
                  placeholder="Nro de la Filas"
                />
                <input
                  onChange={handleChange}
                  value={number_column}
                  type="number"
                  className="form-control ms-1"
                  name="number_column"
                  placeholder="Nro de Butacas por Fila"
                />
              </div>
            </div>

            <div className="mb-3">
              <select
                value={state}
                onChange={handleChange}
                name="state"
                className="form-select"
                aria-label="Estado"
              >
                <option value={true}>Disponible</option>
                <option value={false}>No Disponible</option>
              </select>
            </div>

            <div className="modal-footer d-flex text-center">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={toggle}
              >
                Cerrar
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleAdd}
              >
                Guardar
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default FormAddShow;
