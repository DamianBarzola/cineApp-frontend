// Formato
// {
//     "id": 1,
//     "name": "Sala Terciaria",
//     "state": true
//   },

import { types } from "../types/types";
const url = "http://localhost:8080";

export const loadSalas = async () => {
  const result = await fetch(url + "/sala/all");
  return result.json();
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
