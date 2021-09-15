import React from "react";
import styles from "../styles/Tickets.module.css";
const Tickets = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center text-center p-4 ">
        <div
          className={styles.containerCard + " container col-md-12 p-4 bg-dark"}
        >
          <div className="row">
            <div className="col-md-6">
              <h1>Foto de la Peli</h1>
            </div>
            <div className="col-md-6">
              <form action="">
                <h1>Boleteria</h1>
                <div>
                  <select
                    class="form-select bg-secondary m-2"
                    aria-label="Default select example"
                  >
                    <option selected>Pelicula</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div>
                  <select
                    class="form-select bg-secondary m-2"
                    aria-label="Default select example"
                  >
                    <option selected>Dia</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <select
                    class="form-select bg-secondary m-2"
                    aria-label="Default select example"
                    required
                  >
                    <option selected>Hora</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <select
                    class="form-select bg-secondary m-2"
                    aria-label="Default select example"
                  >
                    <option selected>Butaca</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <button className="btn btn-primary">ASD</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
