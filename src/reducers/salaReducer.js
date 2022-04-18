import { types } from "../types/types";

const initialState = {
  data: [],
};
export const salaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.salaAdd:
      return { ...state, data: [...state.data, action.payload] };
    case types.salaRead:
      return {
        ...state,
        data: action.payload,
      };
    case types.salaModify:
      const indexUpd = state.data.findIndex(
        (sala) => sala.id === action.payload.id
      );
      return {
        ...state,
        data: [
          ...state.data.slice(0, indexUpd),
          action.payload,
          ...state.data.slice(indexUpd + 1),
        ],
      };
    case types.salaDelete:
      return {
        ...state,
        data: state.data.filter((sala) => {
          return sala.id !== action.payload;
        }),
      };
    case types.salaClean:
      return { ...state, data: [] };
    default:
      return state;
  }
};
