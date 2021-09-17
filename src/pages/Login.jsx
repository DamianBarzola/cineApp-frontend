import React from "react";
import style from "../styles/Login.module.css";

const Login = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center text-center my-5 ">
        <div
          className={
            style.containerCard + " container col-md-6 col-lg-4  bg-dark"
          }
        >
          <form className={style.form + " p-4"} action="">
            <div className={style.title}>
              <p>
                <h2> Inicio de Sesión</h2>
              </p>
            </div>

            <input
              className="form-control  mt-5"
              type="text"
              placeholder="Usuario"
              name="nombre"
              minlength="1"
              maxlength="40"
              pattern="[A-Za-z0-9_-]{1,20}"
              required
            />
            <input
              className="form-control mt-4"
              type="password"
              placeholder="Contraseña"
              name="email"
              minlength="4"
              maxlength="40"
              required
            />
            <button className={style.btnLog + " mt-5"} type="submit">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
