// Formato
// {
//     "id": 1,
//     "name": "Sala Terciaria",
//     "state": true
//   },

import { types } from "../types/types";
import { url } from "../types/config";

export const loadSalas = async () => {
  const result = await fetch(url + "/salas/", {
    method: "GET",
  });
  return result.json();
};

export const createSala = (data) => {
  return (dispatch) => {
    fetch(url + "/salas/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((datawithid) => {
        dispatch(createSalaData(datawithid));
      });
  };
};

export const deleteSala = (id) => {
  return (dispatch) => {
    fetch(url + "/salas/" + id, {
      method: "DELETE",
    })
      // .then((res) => res.json())
      .then((data) => {
        dispatch(deleteSalaData(id));
      });
  };
};

export const updateSala = (data) => {
  return (dispatch) => {
    fetch(url + "/salas/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((ResData) => {
        dispatch(updateSalaData(data));
      });
  };
};

/*-------------------------Save Data--------------------------------- */
export const createSalaData = (data) => {
  return {
    type: types.salaAdd,
    payload: data,
  };
};
export const readSalas = (data) => {
  return {
    type: types.salaRead,
    payload: data,
  };
};

export const clearSalaData = () => {
  return {
    type: types.salaClean,
  };
};
export const deleteSalaData = (id) => {
  return {
    type: types.salaDelete,
    payload: id,
  };
};
export const updateSalaData = (data) => {
  return {
    type: types.salaModify,
    payload: data,
  };
};
