import { url } from "../types/config";

export const sendContactMsg = (data) => {
  return (dispatch) => {
    fetch(url + "/extra/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        alert("Mensaje de contacto enviado con exito.");
      });
  };
};
