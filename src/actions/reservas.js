import { types } from "../types/types";
import { url } from "../types/config";
import { toast } from "react-toastify";

export const deleteReserva = (id) => {
  return (dispatch) => {
    fetch(url + "/reservas/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('error');
      })
      .then((data) => {
        console.log(data)
        dispatch(deleteRes(id))
        toast.error('Error al conectarse al servidor', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
}

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
