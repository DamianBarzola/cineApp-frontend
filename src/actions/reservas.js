import { types } from "../types/types";
import { url } from "../types/config";

export const deleteReserva = (id) => {
  fetch(url + "/reservas/" + id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert("Reserva borrada con exito");
    })
    .catch((error) => {
      alert("Error al conectarse al servidor");
    });
};

export const loadReservas = async (id) => {
  const result = await fetch(url + "/reservas/all/" + id);
  return result.json();
};

/*-------------------------Save Data--------------------------------- */

export const readreservas = (data) => {
  return {
    type: types.reservaRead,
    payload: data,
  };
};

export const deleteRes = (id) => {
  return {
    type: types.reservaDelete,
    payload: id,
  };
};

export const msgErrorreserva = (data) => {
  return {
    type: types.reservaMsgError,
    payload: data,
  };
};

export const reservaClearMsgError = () => {
  return {
    type: types.reservaClearMsgError,
  };
};

export const clearreservaData = () => {
  return {
    type: types.reservaClean,
  };
};
