import { types } from "../types/types";
import { url } from "../types/config";
import { toast } from "react-toastify";

export const loadShows = async () => {
  const result = await fetch(url + "/funciones/", {
    method: "GET",
  });
  return result.json();
};

export const loadSalesPerShow = async () => {
  const result = await fetch(url + "/reservas/listados/funcion");
  return result.json();
};

export const creteShow = (data) => {
  return (dispatch, getstate) => {
    fetch(url + "/funciones/", {
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
      .then((datawithid) => {
        dispatch(createShowData(datawithid));
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

export const deleteShow = (id) => {
  return (dispatch) => {
    fetch(url + "/funciones/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('error');
      })
      .then((data) => {
        dispatch(deleteShowData(id));
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

export const updateShow = (data) => {
  return (dispatch) => {
    fetch(url + "/funciones/" + data.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('error');
      })
      .then((ResData) => {
        dispatch(updateShowData(ResData));
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

/*-------------------------Save Data--------------------------------- */
export const readSalesPerShow = (data) => {
  return {
    type: types.listpershowRead,
    payload: data,
  };
};

export const readShows = (data) => {
  return {
    type: types.showRead,
    payload: data,
  };
};
export const createShowData = (data) => {
  return {
    type: types.showAdd,
    payload: data,
  };
};

export const clearShowData = () => {
  return {
    type: types.showClean,
  };
};
export const updateShowData = (data) => {
  return {
    type: types.showModify,
    payload: data,
  };
};

export const deleteShowData = (id) => {
  return {
    type: types.showDelete,
    payload: id,
  };
};
