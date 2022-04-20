import { types } from "../types/types";
import { url } from "../types/config";
import { loadSalas, readSalas } from "./sala";

export const loadButacas = async () => {
  const result = await fetch(url + "/butacas/", {
    method: "GET",
  });
  return result.json();
};

export const creteButaca = (data) => {
  return (dispatch, getstate) => {
    fetch(url + "/butacas/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((datawithid) => {
        dispatch(createButacaData(datawithid));
      });
  };
};

export const deleteButaca = (id) => {
  return (dispatch) => {
    fetch(url + "/butacas/" + id, {
      method: "DELETE",
    })
      // .then((res) => res.json())
      .then((data) => {
        loadSalas().then((salaData) => {
          dispatch(readSalas(salaData));
        });
      });
  };
};

export const updateButaca = (data) => {
  return (dispatch) => {
    fetch(url + "/butacas/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      // .then((res) => res.json())
      .then((ResData) => {
        loadSalas().then((salaData) => {
          dispatch(readSalas(salaData));
        });
      });
  };
};

/*-------------------------Save Data--------------------------------- */
export const readButacas = (data) => {
  return {
    type: types.butacaRead,
    payload: data,
  };
};
export const createButacaData = (data) => {
  return {
    type: types.butacaAdd,
    payload: data,
  };
};

export const clearButacaData = () => {
  return {
    type: types.butacaClean,
  };
};
export const updateButacaData = (data) => {
  return {
    type: types.butacaModify,
    payload: data,
  };
};

export const deleteButacaData = (id) => {
  return {
    type: types.butacaDelete,
    payload: id,
  };
};
