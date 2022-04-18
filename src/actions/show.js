// {  Formato
//     "id": 1,
//     "pelicula": {
//       "id": 3,
//       "name": "El padrino",
//       "description": "Don Vito Corleone, conocido dentro de los círculos del hampa como \"El Padrino\", es el patriarca de una de las cinco familias que ejercen el mando de la Cosa Nostra en Nueva York en los años 40.",
//       "duration": 150,
//       "poster": "/wLXd1Cd0XW7DhXayfC0Ok5ago9r.jpg"
//     },
//     "sala": {
//       "id": 1,
//       "name": "Sala Terciaria",
//       "state": true
//     }
import { types } from "../types/types";
import { url } from "../types/config";

export const loadShows = async () => {
  const result = await fetch(url + "/funciones/", {
    method: "GET",
  });
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

/*-------------------------Save Data--------------------------------- */
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

export const deleteShowData = (id) => {
  return {
    type: types.showDelete,
    payload: id,
  };
};
