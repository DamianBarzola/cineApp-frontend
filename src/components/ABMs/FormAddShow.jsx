import React from "react";

const FormAddShow = () => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-success  mb-2"
        data-bs-toggle="modal"
        data-bs-target="#addShow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-plus-circle-fill"
          viewBox="0 0 20 18"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
        </svg>
        Agregar
      </button>

      <div class="modal fade" id="addShow" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-dark" id="exampleModalLabel">
                Agregar Función
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <p>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      placeholder="Pelicula(capaz tenga que ser un combobox)"
                    />
                  </p>
                </div>
                <div class="mb-3">
                  <p>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      placeholder="Sala(capaz tenga que ser un combobox)"
                    />
                  </p>
                </div>
              </form>
            </div>
            <div class="modal-footer d-flex text-center">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" class="btn btn-primary">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddShow;
