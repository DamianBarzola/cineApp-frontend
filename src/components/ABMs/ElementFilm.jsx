import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { deleteFilm, updateFilm } from "../../actions/film.js";

const ElementFilm = ({ data }) => {
  const { id, name, description, duration, poster } = data;

  const dispatch = useDispatch();
  const [modalModify, setModalModify] = useState(false);

  const toggleModify = () => setModalModify(!modalModify);

  const [modalDelete, setModalDelete] = useState(false);

  const toggleDelete = () => setModalDelete(!modalDelete);

  const handleDelete = () => {
    dispatch(deleteFilm(id));
  };

  const [newData, setNewData] = useState({
    id: id,
    name: name,
    description: description,
    duration: duration,
    poster: poster,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setNewData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      description.trim() === "" || //ver para validar duracion
      poster.trim() === ""
    ) {
      //falta validar formato
      return alert("Complete los campos"); //ver para cambiar
    } else if (
      /[^A-Za-z\d\s.]/.test(name) ||
      /[^A-Za-z\d\s.]/.test(description) ||
      /[^A-Za-z\d\s./]/.test(poster)
    ) {
      return alert("Formato no valido"); //ver para cambiar
    } else {
      dispatch(updateFilm(newData));
      toggleModify();
    }
  };

  return (
    <>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{duration + " min"}</td>
      <td>{poster}</td>
      <td className="d-flex justify-content-center text-align-center">
        <button
          className="btn btn-danger me-3"
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

      <Modal isOpen={modalModify} toggle={toggleModify} className="modalcss">
        <ModalHeader className="text-dark" toggle={toggleModify}>
          Película - Modificar Datos
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
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Título"
                />
              </p>
            </div>
            <div className="mb-3">
              <p>
                <input
                  onChange={handleChange}
                  value={newData.description}
                  name="description"
                  type="text"
                  className="form-control"
                  placeholder="Descripción"
                />
              </p>
            </div>
            <div className="mb-3">
              <p>
                <input
                  onChange={handleChange}
                  value={newData.duration}
                  name="duration"
                  type="number"
                  className="form-control"
                  placeholder="Duración (Min)"
                />
              </p>
            </div>
            <div className="mb-3">
              <p>
                <input
                  onChange={handleChange}
                  value={newData.poster}
                  name="poster"
                  type="text"
                  className="form-control"
                  placeholder="Link Poster"
                />
              </p>
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
          Estas seguro que quieres eliminar esta pelicula?
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
    </>
  );
};

export default ElementFilm;
