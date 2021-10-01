import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { emailAndPasslogin } from "../actions/auth";
import style from "../styles/Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ email: "", password: "" });
  const { email, password } = data;
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      dispatch(emailAndPasslogin(email, password));
    } catch (e) {
      console.log("object");
    }

    //ver para cambiar
  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center text-center my-5 ">
        <div
          className={
            style.containerCard + " container col-md-6 col-lg-4  bg-dark"
          }
        >
          <form className={style.form + " p-4"} onSubmit={handleLogin}>
            <div className={style.title}>
              <h2> Inicio de Sesión</h2>
            </div>

            <input
              onChange={handleChange}
              value={email}
              className="form-control  mt-5"
              type="email"
              placeholder="Correo Electrónico"
              name="email"
              maxLength="40"
              required
            />
            <input
              onChange={handleChange}
              value={password}
              className="form-control mt-4"
              type="password"
              placeholder="Contraseña"
              name="password"
              minLength="1"
              maxLength="40"
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
