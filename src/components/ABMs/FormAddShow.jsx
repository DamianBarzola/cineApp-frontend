import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const FormAddShow = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
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
          Agregar Función
        </ModalHeader>
        <ModalBody className="text-dark">
          <form>
            <div className="mb-3">
              <p>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  placeholder="Pelicula (combobox)"
                />
              </p>
            </div>
            <div className="mb-3">
              <p>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  placeholder="Sala (combobox)"
                />
              </p>
            </div>
            <div className="mb-3">
              <p>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  placeholder="Fecha (calendar?)"
                />
              </p>
            </div>
            <div className="mb-3">
              <p>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  placeholder="Horario (checks o combobox)"
                />
              </p>
            </div>
            <div className="modal-footer d-flex text-center">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={toggle}
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
    </div>
  );
};

export default FormAddShow;
