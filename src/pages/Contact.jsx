import React from "react";
import style from "../styles/Contact.module.css";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div className={style.container}>
      {" "}
      <div className={style.col}>
        <form className={style.form + " p-4"} action="">
          <div className={style.title}>
            <p>
              <h2>
                {" "}
                <FiMail className={style.icon} />
                Contacto
              </h2>
            </p>
          </div>

          <input
            class="form-control me-2 mt-3"
            type="text"
            placeholder="Nombre Completo"
            name="nombre"
            minlength="4"
            maxlength="40"
            pattern="[A-Za-z0-9_-\s]{1,20}"
            required
          />
          <input
            class="form-control me-2 mt-3"
            type="email"
            placeholder="Correo Electrónico"
            name="email"
            minlength="4"
            maxlength="40"
            required
          />
          <input
            class="form-control me-2 mt-3"
            type="text"
            placeholder="Asunto"
            minlength="1"
            maxlength="40"
            pattern="[A-Za-z0-9_-\s]{1,20}"
            name="asunto"
            required
          />
          <textarea
            class="form-control me-2 mt-3 "
            placeholder="Mensaje"
            rows="5"
            minlength="1"
            maxlength="500"
            pattern="[A-Za-z0-9_-\s]{1,20}"
            name="mensaje"
            required
          ></textarea>
          <button className={style.btn + " mt-4"} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
