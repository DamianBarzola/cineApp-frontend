import { url } from "../types/config";
import { types } from "../types/types";

export const buyTicket = (data) => {
  return (dispatch) => {
    fetch(url + "/reservas/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.paymentMsg) {
          dispatch(ticketRefusedPayment());
        } else {
          console.log(data);
          dispatch(ticketSuccess(data));
        }
      })
      .catch((e) => {
        dispatch(ticketErrorConnection());
      });
  };
};

export const deleteTicketSale = (data) => {
  return (dispatch) => {
    fetch(url + "/reservas/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Entrada no encontrada") {
          dispatch(ticketCancel({ situation: 2, message: data.message }));
        } else {
          dispatch(ticketCancel({ situation: 1, message: data.message }));
        }
      })
      .catch((e) =>
        dispatch(ticketCancel({ situation: 3, message: "Error de conexion" }))
      );
  };
};

/*-------------------------Save Data--------------------------------- */

export const clearTicketData = () => {
  return {
    type: types.ticketSaleClean,
  };
};

export const ticketSuccess = (data) => {
  return {
    type: types.ticketSaleSuccess,
    payload: data,
  };
};
export const ticketRefusedPayment = () => {
  return {
    type: types.ticketSaleRefused,
    payload: "Información de pago no válida.",
  };
};
export const ticketErrorConnection = () => {
  return {
    type: types.ticketSaleErrorConnection,
    payload: "Error al conecta a la base de datos.",
  };
};

export const ticketCancel = (data) => {
  return {
    type: types.ticketSaleCancel,
    payload: data,
  };
};

//cinejava99@gmail.com
//tpcinejava
