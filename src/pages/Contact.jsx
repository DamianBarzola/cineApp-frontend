import React, { useState } from "react";
import style from "../styles/Contact.module.css";
import { FiMail } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { sendContactMsg } from "../actions/extra";

const Contact = () => {
  const dispatch = useDispatch();
  const [data, setdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = data;
  const handleChange = (e) => {
    const value = e.target.value;
    setdata({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      subject.trim() === "" ||
      message.trim() === "" ||
      email.trim() === ""
    ) {
      return alert("Complete los campos");
    } else {
      dispatch(sendContactMsg(data));
      setdata({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };
  return (
    <div className={style.container}>
      {" "}
      <div className={style.col}>
        <form className={style.form + " p-4"} action="">
          <div className={style.title}>
            <h2>
              {" "}
              <FiMail className={style.icon} />
              Contacto
            </h2>
          </div>

          <input
            className="form-control me-2 mt-3"
            onChange={handleChange}
            value={name}
            name="name"
            type="text"
            placeholder="Nombre Completo"
            minLength="4"
            maxLength="40"
            required
          />
          <input
            className="form-control me-2 mt-3"
            onChange={handleChange}
            value={email}
            name="email"
            type="email"
            placeholder="Correo Electrónico"
            minLength="4"
            maxLength="40"
            required
          />
          <input
            className="form-control me-2 mt-3"
            onChange={handleChange}
            value={subject}
            name="subject"
            type="text"
            placeholder="Asunto"
            minLength="1"
            maxLength="40"
            required
          />
          <textarea
            className="form-control me-2 mt-3 "
            onChange={handleChange}
            value={message}
            name="message"
            placeholder="Mensaje"
            rows="5"
            minLength="1"
            maxLength="500"
            required
          ></textarea>
          <button
            className={style.btn + " mt-4"}
            type="submit"
            onClick={handleSend}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
