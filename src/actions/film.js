import { types } from "../types/types";
import { url } from "../types/config";

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

export const loadOneFilm = async (id) => {
  const result = await fetch(url + "/peliculas/" + id);
  return result.json();
};
export const loadFilmsAll = async () => {
  const result = await fetch(url + "/peliculas/");
  return result.json();
};

export const loadFilms = async (state) => {
  const result = await fetch(url + "/peliculas/all/" + state);
  return result.json();
};

export const loadFilmsAvailable = async () => {
  const result = await fetch(url + "/peliculas/available/");
  return result.json();
};

export const loadSalesPerMovie = async () => {
  const result = await fetch(url + "/reservas/listados/pelicula");
  return result.json();
};
/*-------------------------Save Data--------------------------------- */
export const readSales = (data) => {
  return {
    type: types.listperfilmRead,
    payload: data,
  };
};

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
