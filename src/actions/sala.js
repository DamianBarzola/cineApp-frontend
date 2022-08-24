// Formato
// {
//     "id": 1,
//     "name": "Sala Terciaria",
//     "state": true
//   },

import { types } from "../types/types";
import { url } from "../types/config";
import { toast } from "react-toastify";

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
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('error');
      })
      .then((datawithid) => {
        // console.log(datawithid);
        // dispatch(createSalaData(datawithid));
        loadSalas().then((salaData) => {
          dispatch(readSalas(salaData));
        });
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

export const deleteSala = (id) => {
  return (dispatch) => {
    fetch(url + "/salas/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('error');
      })
      .then((data) => {
        dispatch(deleteSalaData(id));
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

export const updateSala = (data) => {
  return (dispatch) => {
    fetch(url + "/salas/", {
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
        dispatch(updateSalaData(data));
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
export const setMaintenanceSala = (data) => {
  const id = toast.loading("Por favor, espere...")
  return (dispatch) => {
    fetch(url + "/salas/mantenimiento", {
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
        toast.update(id, {
          render: "Guardado con Éxito", type: "success", isLoading: false, position: "top-center",
          autoClose: 3000,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch(updateSalaData(data));
      })
      .catch((error) => {
        toast.update(id, {
          render: 'Error al conectarse al servidor',
          type: "error",
          isLoading: false,
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: true,
          progress: undefined,
        });

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

