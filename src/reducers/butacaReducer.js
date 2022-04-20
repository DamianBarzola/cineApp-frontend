import { types } from "../types/types";

const initialState = {
  data: [],
};
export const butacaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.butacaAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case types.butacaRead:
      return {
        ...state,
        data: action.payload,
      };
    case types.butacaModify:
      const indexUpd = state.data.findIndex(
        (butaca) => butaca.id === action.payload.id
      );
      return {
        ...state,
        data: [
          ...state.data.slice(0, indexUpd),
          action.payload,
          ...state.data.slice(indexUpd + 1),
        ],
      };

    case types.butacaDelete:
      return {
        ...state,
        data: state.data.filter((butaca) => {
          return butaca.id !== action.payload;
        }),
      };
    case types.butacaClean:
      return { ...state, data: [] };
    default:
      return state;
  }
};
