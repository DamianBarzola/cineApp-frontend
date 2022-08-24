// import { types } from "../types/types";
import { url } from "../types/config";
import { toast } from "react-toastify";

export const loadDates = async (id) => {
  let result;
  if (id) {
    result = await fetch(url + "/funciones/byMovie/" + id);
  } else {
    result = await fetch(url + "/funciones/byMovie/" + 1);
  }
  return result.json();
};

export const loadFunciones = async (id, fechaFuncion) => {
  let result;
  if (id && fechaFuncion) {
    result = await fetch(url + "/funciones/byMovie/" + id + "/" + fechaFuncion);
  } else {
    result = await fetch(url + "/funciones/byMovie/1/2022-04-22");
  }
  return result.json();
};

export const loadButacas = async (id) => {
  let result;
  if (id) {
    result = await fetch(url + "/butacas/byFuncion/" + id);
  } else {
    result = await fetch(url + "/butacas/byFuncion/" + 1);
  }
  return result.json();
};
