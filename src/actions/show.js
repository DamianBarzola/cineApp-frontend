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
const url = "http://localhost:8080";

export const loadShows = async () => {
  const result = await fetch(url + "/funcion/all");
  return result.json();
};

export const readShows = (data) => {
  return {
    type: types.showRead,
    payload: data,
  };
};

export const clearShowData = () => {
  return {
    type: types.showClean,
  };
};
