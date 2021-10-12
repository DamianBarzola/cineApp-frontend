import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { creteFilm } from "../../actions/film";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const FormAddFilm = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    description: "",
    duration: "",
    poster: "",
  });

  const { name, description, duration, poster } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      description.trim() === "" || //ver para validar duracion
      poster.trim() === ""
    ) {
      //falta validar formato
      return alert("Complete los campos"); //ver para cambiar
    } else if (
      /[^A-Za-z\d\s.,;:\u00E0-\u00FC]/.test(name) || //ver validaciones
      /[^A-Za-z\d\s.,;:\u00E0-\u00FC]/.test(description) ||
      /[^A-Za-z\d\s./]/.test(poster)
    ) {
      return alert("Formato no valido"); //ver para cambiar
    } else {
      dispatch(creteFilm(data));
      toggle();
      setData({
        name: "",
        description: "",
        duration: "",
        poster: "",
      });
    }
  };

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
          Agregar Pelicula
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
                  placeholder="Título"
                  maxLength="75"
                />
              </p>
            </div>
            <div className="mb-3">
              <p>
                <input
                  value={description}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Descripción"
                  maxLength="300"
                />
              </p>
            </div>
            <div className="mb-3">
              <p>
                <input
                  value={duration}
                  onChange={handleChange}
                  type="number"
                  className="form-control"
                  name="duration"
                  placeholder="Duración (Min)"
                />
              </p>
            </div>
            <div className="mb-3">
              <p>
                <input
                  value={poster}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="poster"
                  placeholder="Link Poster"
                  maxLength="50"
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

export default FormAddFilm;
