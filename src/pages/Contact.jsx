import React from "react";
import style from "../styles/Contact.module.css";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div className={style.container}>
      {" "}
      <div className={style.col}>
        <form className={style.form} action="">
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
            className={style.input}
            type="text"
            placeholder="Nombre Completo"
            name="nombre"
            required
          />
          <input
            className={style.input}
            type="email"
            placeholder="Correo Electrónico"
            name="email"
            required
          />
          <input
            className={style.input}
            type="text"
            placeholder="Asunto"
            name="asunto"
            required
          />
          <textarea
            className={style.textarea}
            placeholder="Mensaje"
            name="mensaje"
            required
          ></textarea>
          <button className={style.btn} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
