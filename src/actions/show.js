import { types } from "../types/types";
import { url } from "../types/config";

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
      .then((res) => res.json())
      .then((datawithid) => {
        dispatch(createShowData(datawithid));
      });
  };
};

export const deleteShow = (id) => {
  return (dispatch) => {
    fetch(url + "/funciones/" + id, {
      method: "DELETE",
    })
      // .then((res) => res.json())
      .then((data) => {
        dispatch(deleteShowData(id));
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
      .then((res) => res.json())
      .then((ResData) => {
        dispatch(updateShowData(ResData));
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
