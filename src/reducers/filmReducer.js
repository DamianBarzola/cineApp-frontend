import { types } from "../types/types";

const initialState = {
  data: [],
};
export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.filmAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case types.filmRead:
      return {
        ...state,
        data: action.payload,
      };
    case types.listperfilmRead:
      return {
        ...state,
        list: action.payload,
      };
    case types.filmModify:
      const indexUpd = state.data.findIndex(
        (film) => film.id === action.payload.id
      );
      return {
        ...state,
        data: [
          ...state.data.slice(0, indexUpd),
          action.payload,
          ...state.data.slice(indexUpd + 1),
        ],
      };

    case types.filmDelete:
      return {
        ...state,
        data: state.data.filter((film) => {
          return film.id !== action.payload;
        }),
      };
    case types.filmClean:
      return { ...state, data: [] };
    default:
      return state;
  }
};
