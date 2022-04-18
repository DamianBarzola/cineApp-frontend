import { types } from "../types/types";
import { url } from "../types/config";
export const emailAndPasslogin = (email, password) => {
  const datos = { email: email, password: password };
  return (dispatch) => {
    fetch(url + "/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    })
      .then((res) =>
        res.json().then((data) => {
          localStorage.setItem("user", JSON.stringify(data));
          dispatch(login(data.fullname, data.email));
          window.location.reload();
        })
      )
      .catch((e) => dispatch(errorMsg("Datos Incorrectos")));
  };
};

/*-------------------------Save Data--------------------------------- */

export const login = (fullname, email) => {
  return {
    type: types.login,
    payload: {
      fullname,
      email,
    },
  };
};
export const logout = () => {
  return (dispatch) => {
    dispatch({ type: types.logout });
  };
};
export const errorMsg = (msg) => {
  return (dispatch) => {
    dispatch({ type: types.logMsg, payload: { msg: msg } });
  };
};
