//Formato Pelicula
// {
//     id:1,
//     name:"Gladiador",
//     description:"Máximo, General de las Legiones Romanas ..."
// }
import { types } from "../types/types";
import { url } from "../types/config";

export const loadFilms = async () => {
  const result = await fetch(url + "/peliculas/");
  return result.json();
};

export const creteFilm = (data) => {
  return (dispatch, getstate) => {
    //const {auth} = getstate().auth; En caso de usar un token lo pediriamos aqui
    fetch(url + "/peliculas/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((datawithid) => {
        dispatch(create(datawithid));
      });
  };
};

export const deleteFilm = (id) => {
  return (dispatch) => {
    fetch(url + "/peliculas/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(deletef(id));
      });
  };
};

export const updateFilm = (data) => {
  return (dispatch) => {
    fetch(url + "/peliculas/" + data.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((ResData) => {
        dispatch(update(data));
      });
  };
};

/*-------------------------Save Data--------------------------------- */

export const create = (data) => {
  return {
    type: types.filmAdd,
    payload: data,
  };
};

export const readFilms = (data) => {
  return {
    type: types.filmRead,
    payload: data,
  };
};

export const deletef = (id) => {
  return {
    type: types.filmDelete,
    payload: id,
  };
};

export const update = (data) => {
  return {
    type: types.filmModify,
    payload: data,
  };
};

export const clearFilmData = () => {
  return {
    type: types.filmClean,
  };
};
