import React from "react";

const FormAddFilm = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-success  mb-2"
        data-bs-toggle="modal"
        data-bs-target="#addfilm"
      >
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

      <div className="modal fade" id="addfilm" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="exampleModalLabel">
                Agregar Película
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <p>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      placeholder="Título"
                    />
                  </p>
                </div>
                <div className="mb-3">
                  <p>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      placeholder="Descripción"
                    />
                  </p>
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex text-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddFilm;
