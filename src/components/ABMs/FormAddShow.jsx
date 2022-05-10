import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { creteShow } from "../../actions/show";

const FormAddShow = () => {
  const films = useSelector((state) => state.film.data);
  const salas = useSelector((state) => state.sala.data);

  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [show, setShow] = useState({
    fechaFuncion: "",
    horaFuncion: "",
    pelicula_id: "",
    sala_id: "",
  });
  const { fechaFuncion, pelicula_id, sala_id, horaFuncion } = show;

  const handleChange = (e) => {
    const value = e.target.value;
    setShow({
      ...show,
      [e.target.name]: value,
    });
  };

  const handleAdd = (e) => {
    console.log(show);
    e.preventDefault();
    if (
      horaFuncion.trim() === "" ||
      fechaFuncion.trim() === "" ||
      pelicula_id.trim() === "" ||
      sala_id.trim() === ""
    ) {
      return alert("Complete los campos"); //ver para cambiar
    } else {
      dispatch(creteShow(show));
      toggle();
      setShow({
        fechaFuncion: "",
        horaFuncion: "",
        pelicula_id: "",
        sala_id: "",
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
          Agregar Función
        </ModalHeader>
        <ModalBody className="text-dark">
          <form>
            <div className="mb-3">
              <select
                value={pelicula_id}
                onChange={handleChange}
                name="pelicula_id"
                className="form-select"
                aria-label="Seleccionar estado"
              >
                <option value="" disabled hidden>
                  Elegir Pelicula
                </option>
                {films.map((film) => {
                  if (film.state === "Cartelera") {
                    return (
                      <option value={film.id} key={film.id}>
                        {film.name}
                      </option>
                    );
                  } else {
                    return null;
                  }
                })}
              </select>
            </div>
            <div className="mb-3">
              <select
                value={sala_id}
                onChange={handleChange}
                name="sala_id"
                className="form-select"
              >
                <option value="" disabled hidden>
                  Elegir Sala
                </option>
                {salas.map((sala) => {
                  if (sala.state === "true" || sala.state === true) {
                    return (
                      <option value={sala.id} key={sala.id}>
                        {sala.name}
                      </option>
                    );
                  } else {
                    return null;
                  }
                })}
              </select>
            </div>
            <div className="mb-3">
              <p>
                <input
                  onChange={handleChange}
                  value={fechaFuncion}
                  name="fechaFuncion"
                  type="Date"
                  className="form-control"
                  min={new Date().toISOString().slice(0, 10)}
                  id="recipient-name"
                  placeholder="Fecha"
                />
              </p>
            </div>
            <div className="mb-3">
              <p>
                <input
                  onChange={handleChange}
                  value={horaFuncion}
                  name="horaFuncion"
                  type="Time"
                  className="form-control"
                  id="recipient-name"
                  placeholder="Horario"
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
              <button className="btn btn-primary" onClick={handleAdd}>
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
