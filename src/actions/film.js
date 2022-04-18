//Formato Pelicula
// {
//     id:1,
//     name:"Gladiador",
//     description:"Máximo, General de las Legiones Romanas ..."
// }
import { types } from "../types/types";

const url = "http://localhost:8080";

export const creteFilm = (data) => {
  return (dispatch, getstate) => {
    //const {auth} = getstate().auth; En caso de usar un token lo pediriamos aqui
    fetch(url + "/pelicula/add", {
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

export const create = (data) => {
  return {
    type: types.filmAdd,
    payload: data,
  };
};

export const loadFilms = async (state) => {
  const result = await fetch(url + "/peliculas/all/" + state);
  return result.json();
};

export const loadOneFilm = async (id) => {
  const result = await fetch(url + "/peliculas/" + id);
  return result.json();
};

export const readFilms = (data) => {
  return {
    type: types.filmRead,
    payload: data,
  };
};

export const deleteFilm = (id) => {
  return (dispatch, getstate) => {
    //const {auth} = getstate().auth; En caso de usar un token lo pediriamos aqui
    fetch(url + "/pelicula/delete/" + id, {
      method: "Delete",
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(deletef(id));
      });
  };
};

export const deletef = (id) => {
  return {
    type: types.filmDelete,
    payload: id,
  };
};

export const updateFilm = (data) => {
  return (dispatch, getstate) => {
    //const {auth} = getstate().auth; En caso de usar un token lo pediriamos aqui
    fetch(url + "/pelicula/update/" + data.id, {
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
