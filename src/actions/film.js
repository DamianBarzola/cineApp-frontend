import { types } from "../types/types";
import { url } from "../types/config";
import { toast } from "react-toastify";

export const creteFilm = (data) => {
  return (dispatch, getstate) => {
    //const {auth} = getstate().auth; En caso de usar un token lo pediriamos aqui
    fetch(url + "/peliculas/", {
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
        dispatch(create(datawithid));
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

export const deleteFilm = (id) => {
  return (dispatch) => {
    fetch(url + "/peliculas/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('error');
      })
      .then((data) => {
        dispatch(deletef(id));
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

export const updateFilm = (data) => {
  return (dispatch) => {
    fetch(url + "/peliculas/" + data.id, {
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
        dispatch(update(data));
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
export const msgErrorFilm = (data) => {
  return {
    type: types.filmMsgError,
    payload: data,
  };
};

export const filmClearMsgError = () => {
  return {
    type: types.filmClearMsgError,
  };
};

export const clearFilmData = () => {
  return {
    type: types.filmClean,
  };
};
