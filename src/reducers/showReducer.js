import { types } from "../types/types";

const initialState = {
  data: [],
};
export const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.showAdd:
      return { ...state, data: [...state.data, action.payload] };
    case types.showRead:
      return {
        ...state,
        data: action.payload,
      };
    case types.showModify:
      const indexUpd = state.data.findIndex(
        (show) => show.id === action.payload.id
      );
      return {
        ...state,
        data: [
          ...state.data.slice(0, indexUpd),
          action.payload,
          ...state.data.slice(indexUpd + 1),
        ],
      };
    case types.showDelete:
      return {
        ...state,
        data: state.data.filter((sala) => {
          return sala.id !== action.payload;
        }),
      };
    case types.showClean:
      return { ...state, data: [] };
    default:
      return state;
  }
};
