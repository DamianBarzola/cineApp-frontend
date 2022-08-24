import { url } from "../types/config";
import { toast } from "react-toastify";


export const sendContactMsg = (data) => {
  return (dispatch) => {
    fetch(url + "/extra/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('error');
      })
      .then((data) => {
        alert("Mensaje de contacto enviado con exito.");
      })
      .catch((error) => {
        toast.error('Error al conectarse al servidor', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
};
